var express = require('express');
var app = express();
var passport = require('passport');
var GoogleStrategy = require('passport-google').Strategy;
var port     = 3000;
var passport = require('passport');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var fs = require('fs');
var mongo = require('./lib/mongo.js');
var schema = require('./lib/schema.json');

var sessions = {};


var authEndpoints = ['/rest/addCropItem','/rest/addCost', '/rest/updateSchema'];

// are we on dev or prod?
var dev = false;
// Should be a simple list of authorized emails for now.
var baseLocation = '/etc/farm-budgets/';
process.argv.forEach(function (val, index, array) {
  if( val == '--dev' ) dev = true;
  if( val == '--baseLocation' && array.length > index+1 ) baseLocation = array[index+1]; 
});

var authFile = require(baseLocation+'auth.json');
var db = require(baseLocation+'db.json');

// set up our express application
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch',
                  saveUninitialized: true,
                  resave: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(function(req, res, next) {
    if( authEndpoints.indexOf(req.originalUrl) > -1 && !req.user ) {
        resp.send({error: true, message: 'Auth Error'});
    }
    next();
});

// serve static files
app.use(express.static(__dirname + (dev ? '/app' : '/dist')));

mongo.connect(function(err){
    if( err ) {
        console.log(err);
        process.exit();
    }
});


var url = dev ? 'http://localhost:3000' : 'http://alder.bioenergy.casil.ucdavis.edu';

/** setup google oauth **/
passport.use(new GoogleStrategy({
    returnURL: url+'/auth/google/return',
    realm: url
  },
  function(identifier, profile, done) {
    profile.id = identifier;
    sessions[identifier] = profile;
    done(null, profile);
  }
));
passport.serializeUser(function(user, done) {
    sessions[user.id] = user;
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    if( sessions[id] ) done(null, sessions[id]);
    else done({error:true, message:'not logged in'});
});

app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/return', 
  passport.authenticate('google', { successRedirect: '/#admin',
                                    failureRedirect: '/' }));
app.get('/rest/user', function(req, resp){
    if( req.user ) resp.send(req.user);
    else resp.send({error:true, message:'Not logged in'});
});
/** end google oauth **/

// demo function for now
/*
app.post('/rest/addCropItem', function(req, resp) {
    if( !req.user ) return resp.send({error: true, message: 'Auth Error'});
    var item = req.body;

    if( item.items ) {
        for( var i = 0; i < item.items.length; i++ ) {
            if( !addCropItem(item.items[i], resp) ) return;
        }
    } else {
        addCropItem(item, resp);
    }
    
    fs.writeFileSync(baseLocation+'db.json', JSON.stringify(db), 'utf8');
    resp.send({success:true});
});
function addCropItem(item, resp) {
    if( !item.state || !item.crop || !item.item ) {
        resp.send({error:true, message:'you must provide stuff'});
        return false;
    }

    if( item.delete ) {
        delete db.cropItems[item.state][item.crop][item.item];
    } else {
        if( !db.cropItems[item.state] ) db.cropItems[item.state] = {};
        if( !db.cropItems[item.state][item.crop] ) db.cropItems[item.state][item.crop] = {};
        var itemName = item.item;
        var state = item.state;
        var crop = item.crop;
        delete item.state;
        delete item.crop;
        delete item.item;

        db.cropItems[state][crop][itemName] = item;
    }
    return true;
}

app.post('/rest/addCost', function(req, resp) {
    if( !req.user ) return resp.send({error: true, message: 'Auth Error'});
    var item = req.body;

    if( item.costs ) {
        for( var i = 0; i < item.costs.length; i++ ) {
            if( !addCost(item.costs[i], resp) ) return;
        }
    } else {
        addCost(item, resp);
    }    

    fs.writeFileSync(baseLocation+'db.json', JSON.stringify(db), 'utf8');
    resp.send({success:true});
});
function addCost(item, resp) {
    if( !item.state || !item.item ) {
        resp.send({error:true, message:'you must provide stuff'});
        return false;
    }

    if( item.delete ) {
        delete db.costs[item.state][item.item];
    } else {
        if( !db.costs[item.state] ) db.costs[item.state] = {};
        var state = item.state;
        var itemName = item.item;
        delete item.state;
        delete item.item;

        db.costs[state][itemName] = item;
    }
    return true;
}*/

app.post('/rest/addCropItem', function(req, resp) {
    var item = req.body;

    if( item.items ) mongo.addCropItem(item.items, resp);
    else mongo.addCropItem(item, resp);
});

app.post('/rest/addCost', function(req, resp) {
    var item = req.body;

    if( item.costs ) mongo.addCost(item.costs, resp);
    else mongo.addCost(item, resp);
});

app.get('/rest/schema', function(req, resp) {
    resp.send(schema);
});

app.post('/rest/updateSchema', function(req, resp) {
    var newSchema = JSON.parse(req.body.json);
    if( !newSchema ) return resp.send({error:true, message:'No schema found!'});

    schema = newSchema;

    for( var key in schema ) {
        console.log(key+': '+(Array.isArray(schema[key])));
    }

    fs.writeFileSync(__dirname+'/lib/schema.json', JSON.stringify(schema), 'utf8');
    resp.send({success: true});
});

app.get('/rest/getCropItems', function(req, resp){
    var budget = req.query.budget;
    var location = req.query.location;
    if( location ) location = JSON.parse(location);
    var crop = req.query.crop;

    mongo.getCropItems(budget, location, crop, resp);
});

app.get('/rest/getCosts', function(req, resp){
    var budget = req.query.budget;
    var location = req.query.location;
    if( location ) location = JSON.parse(location);

    mongo.getCosts(budget, location, resp);
});

app.get('/rest/getCropsForLocation', function(req, resp){
    var location = req.query.location;
    if( location ) location = JSON.parse(location);

    mongo.getCropsForLocation(location, resp);
});

app.listen(port);
console.log('Server is up and running at :'+port+' & dev='+dev);