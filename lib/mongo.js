var MongoClient = require('mongodb').MongoClient;

var connUrl = 'mongodb://localhost:27017/farmBudgets';
var db = null;

var schemaCollectionName = 'schema';
var costsCollectionName = 'costs';
var amountsCollectionName = 'amounts';
var schemaCollection;
var costsCollection;
var amountsCollection;

/* required items for input */
var required = {
    amounts : ['budget', 'crop', 'item', 'amount'],
    costs : ['budget', 'item', 'cost']
};
var key = {
    amounts : ['budget', 'crop', 'item'],
    costs : ['budget', 'item']
};


exports.connect = function(callback) {
    MongoClient.connect(connUrl, function(err, database) {
        if( err ) return callback(err);
        db = database;

        schemaCollection = db.collection(schemaCollectionName);
        costsCollection = db.collection(costsCollectionName);
        amountsCollection = db.collection(amountsCollectionName);

        callback();
    });
}

exports.addCropItem = function(item, resp) {
    add('amounts', amountsCollection, item, resp);
}

exports.addCost = function(item, resp) {
    add('costs', costsCollection, item, resp);
}

exports.getCropItems = function(budget, location, crop, resp) {
    get(budget, location, crop, amountsCollection, resp);
}

exports.getCosts = function(budget, location, resp) {
    get(budget, location, null, costsCollection, resp);
}

exports.getCropsForLocation = function(location, resp) {
    if( !location ) return resp.send({error: true, message: 'No location information given'});

    var q1 = null, q2 = null, q3 = null, total = 0, c = 0, result = {};
    var hasError = false;

    if( location.zipCode ) {
        total++;
        q1 = { zipCode : location.zipCode };
    } 
    if( location.county && location.state ) {
        total++;
        q2 = {
            state : location.state,
            county : location.county
        }
    }
    if( location.state ) {
        total++;
        q3 = {
            state : location.state,
            county : { '$exists': false },
            zipCode : { '$exists': false }
        }
    }

    function done() {
        if( hasError ) return;
        c++;
        if( c == total ) resp.send(result);
    }

    if( q1 ) {
        amountsCollection.distinct('crop', q1, function(err, arr) {
            if( err ) {
                resp.send({error: true, message: err});
                hasError = true;
                return;
            }
            result.zipCode = arr;
            done();
        });
    }

    if( q2 ) {
        amountsCollection.distinct('crop', q2, function(err, arr) {
            if( err ) {
                resp.send({error: true, message: err});
                hasError = true;
                return;
            }
            result.county = arr;
            done();
        });
    }

    if( q3 ) {
        amountsCollection.distinct('crop', q3, function(err, arr) {
            if( err ) {
                resp.send({error: true, message: err});
                hasError = true;
                return;
            }
            result.state = arr;
            done();
        });
    }
    
}

exports.getBudgetForLocality = function(crop, location, resp) {
    if( !crop ) return resp.send({error: true, message: 'No crop information given'});
    if( !location ) return resp.send({error: true, message: 'No location information given'});

    var q = null, total = 0, c = 0, result = {};
    var hasError = false;

    if( location.zipCode ) {
        q = { zipCode : location.zipCode };
    } else if( location.county && location.state ) {
        q = {
            state : location.state,
            county : location.county
        }
    } else if( location.state ) {
        q = {
            state : location.state,
            county : { '$exists': false },
            zipCode : { '$exists': false }
        }
    }

    function done() {
        if( hasError ) return;
        c++;
        if( c == 2 ) resp.send(result);
    }

    costsCollection.find(q).toArray(function(err, results){
        if( err ) {
            resp.send({error: true, message: err});
            hasError = true;
            return;
        }
        result.costs = results;
        done();
    });

    q.crop = crop;
    amountsCollection.find(q, {_id:0}).toArray(function(err, items) {
        if( err ) resp.send({error: true, message: err});

        // update query for costs, only grab what we need.
        var arr = [];
        for( var i = 0; i < items.length; i++ ) {
            arr.push(items[i].item);
        }
        delete q.crop;
        q.item = { '$in' : arr };

        costsCollection.find(q, {_id:0}).toArray(function(err, costs){
            if( err ) resp.send({error: true, message: err});
            resp.send(mergeOnItems(costs, items));
        });
    });
}

function mergeOnItems(costs, items) {
    for( var i = 0; i < items.length; i++ ) {
        for( var j = 0; j < costs.length; j++ ) {
            if( items[i].item == costs[j].item ) {
                for( var key in costs[j] ) items[i][key] = costs[j][key];
                break;
            }
        }
    }
    return items;
}

function get(budget, location, crop,  collection, resp) {
    var search = [];

    if( !location ) return resp.send({error: true, message: 'No location information given'});
    if( !budget ) budget = 'default';

    if( location.zipCode ) {
        search.push({ zipCode : location.zipcode });
    }
    if( location.county && location.state ) {
        search.push({ '$and' : [{state: location.state}, {county: location.county}] });
    }
    // get state level result.  This is a document where there is no county or zip specified
    if( location.state ) {
        search.push({ '$and' : [
            { state   : location.state },
            { county  : { '$exists': false }},
            { zipCode : { '$exists': false }}
        ]});
    }

    if( search.length == 0 ) return resp.send({error: true, message: 'Invalid location information given'});
    search = {'$or': search, 'budget': budget};

    if( crop ) search.crop = crop;

    collection.find(search, {'_id': 0}).toArray(function(err, results){
        if( err ) return resp.send({error: true, message: err});
        resp.send({results: results});
    });
}


function add(type, collection, item, resp) {
    if( Array.isArray(item) ) {
        for( var i = 0; i < item.length; i++ ) {
            var invalid = validData(type, item[i]);
            if( invalid.length > 0 ) return resp.send({error: true, message: 'Missing required '+invalid});
        }
    } else {
        var invalid = validData(type, item);
        if( invalid.length > 0 ) return resp.send({error: true, message: 'Missing required '+invalid});
    }

    // need to make sure we drop all matches first...
    drop(type, collection, item, function(err){
        if( err ) return resp.send({error:true, message:err});

        // now insert new docs
        collection.insert(item, function(err, result){
            if( err ) return resp.send({error:true, message:err});
            resp.send({success:true, message:result});
        });
    });
}

function drop(type, collection, item, callback) {
    if( Array.isArray(item) ) {
        var query = [];
        for( var i = 0; i < item.length; i++ ) {
            query.push(createRemoveQuery(type, item[i]));
        }
        query = {'$or':query};
        collection.remove(query, function(err, resp){
            callback(err);
        });
        return;
    }

    collection.remove(createRemoveQuery(type, item), function(err, resp){
        callback(err);
    });
}

function createRemoveQuery(type, item) {
    var query = {};
    for( i = 0; i < key[type].length; i++ ) {
        query[key[type][i]] = item[key[type][i]];
    }

    // add location parameter to key, only remove for current specified locality
    if( item.zipCode ) {
        query.zipCode = item.zipCode;
    } else if( item.county && item.state ) {
        query.state = item.state;
        query.county = item.county;
    } else if( item.state ) {
        query.state = item.state;
        query.county = { '$exists': false };
        query.zipCode = { '$exists': false };
    }

    return query;
}

function validData(type, item) {
    var key = [];
    for( i = 0; i < required[type].length; i++ ) {
        if( !item[required[type][i]] ) return required[type][i]; 
    }

    if( !hasValidLocation(item) ) return 'Location Information';

    return '';
}

function hasValidLocation(item) {
    // TODO: validate zipcode
    if( item.zipCode ) return true;
    if( item.county && item.state ) return true;
    if( item.state ) return true;
    return false;
}

