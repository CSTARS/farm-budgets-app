'use strict';


var saveTimer = -1;

function UiBuffer(fn, timeout, bind) {
  var timer = -1;

  function bufferFn() {
    if( timer !== -1 ) {
      clearTimeout(timer);
    }
    var args = arguments;

    timer = setTimeout(function(){
      timer = -1;
      fn.apply(bind, args);
    }, timeout);
  }

  return bufferFn;
}

SDK.app = {

  // buffers function (fn) by timeout in ms.  Binds function to whatever bind is provided.
  UiBuffer : UiBuffer,

  getMaterialLink : function(name) {
    return '#budget/materials/'+encodeURIComponent(name);
  },

  getMaterialIconHTML : function(type) {
    return '<i class="fa fa-cube'+(type === 'complex' ? 's' : '')+'"></i>';
  },

  hasAccess : function(object) {
    var user = ExpressAuth.user;

    if( !object || !user ) return false;

    if( user.admin ) return true;

    if( typeof object === 'string' ) {
      object = {authority: object};
    } else if( !object.authority ) {
      return false;
    }

    if( user.authorities.indexOf(object.authority) === -1 &&
        user.email !== object.authority ) {

        return false;
    }

    return true;
  },

  cloneBudget : function() {
    if( SDK.changes.hasChanges() && !confirm('Are you sure you want to clone this budget and save as new?') ) return;

    var data = {
      budget : SDK.getBudget().data,
      materials : SDK.controllers.material.asArray()
    }
    data.budget.name = '';
    data.budget.id = SDK.utils.guid();

    window.location = '#budget/overview';

    document.querySelector('ahb-budget').load(data);
    document.querySelector('budget-farm-editor').show(true);
  },

  saveBudget : function(callback) {
    SDK.app.localsave();

    var budget = $.extend(true,{}, SDK.getBudget().data);
    SDK.utils.strip(SDK.schema.budget, budget);

    budget.materialIds = [];

    var materials = SDK.controllers.material.get();
    for( var name in materials ) {
      if( !materials[name].id ) continue;
      budget.materialIds.push(materials[name].id);
    }

    SDK.budget.save(budget, function(resp){
      if( callback ) callback(resp);

      if( resp.error ) {
        return alert(resp.message);
      }

      // the server may have cleanup some stuff
      // true flag forces reload without prompt
      document.querySelector('ahb-budget').reload(budget.id, true);
    }.bind(this));
  },

  localsave : function(auto) {
    if( saveTimer !== -1 ) clearTimeout(saveTimer);

    saveTimer = setTimeout(function(){
      saveTimer = -1;
      SDK.app._localsave(auto);
    }, 100);
  },

  _localsave : function(auto) {
    var t = new Date().getTime();
    var data = {
      budget : SDK.getBudget().data,
      materials : []
    }

    if( !data.budget.id ) return;

    var materials = SDK.controllers.material.get();
    for( var key in materials ) {
      data.materials.push(materials[key]);
    }

    window.localStorage.setItem('current-budget', data.budget.id);
    window.localStorage.setItem(data.budget.id, JSON.stringify(data));
    SDK.app.localdata = data;

    console.log('Local '+(auto ? 'auto ' : '') +'save: '+(new Date().getTime() - t)+'ms');
  }
};

// privately wire update changes stuff
(function(){

  // this we will want to buffer
  function checkForChanges() {
    SDK.changes.checkBudget(SDK.getBudget().data, SDK.controllers.material.asArray());
  }

  function onDiffCheckComplete(diff) {
    console.log('budget---');
    console.log(diff);
    // path in new event.  This one buffered and what the UI cares about.
    if( diff.budget.length > 0 || diff.materialIds.length > 0 ) {
      SDK.changes.getEventsModule().emit('save-state-update', {
        changes: true,
        budget : diff.budget.length > 0 ? true : false,
        materials : diff.materialIds > 0 ? true : false
      });
      return;
    }

    SDK.changes.getEventsModule().emit('save-state-update', {changes: false});
  }

  // set the app api call, but with the buffered function.  this call isn't cheap
  var buffer = new SDK.app.UiBuffer(checkForChanges, 200);
  SDK.app.checkForChanges = buffer;
  SDK.app.checkForChangesNow = checkForChanges;

  SDK.changes.on('budget-diff', onDiffCheckComplete);


  //
  // now wire up stuff for material changes
  //
  function checkForMaterialChanges() {
    SDK.changes.checkBudget(SDK.getBudget().data, SDK.controllers.material.asArray());
  }

  function onMaterialDiffComplete(diff) {
    console.log('materials---');
    console.log(diff);

    // TODO: why am I checking the unsaved changes array here?
    if( diff.length > 0 || Object.keys(SDK.changes.getUnsaved()).length ) {
      SDK.changes.getEventsModule().emit('material-state-update', {changes: true});
    } else {
      SDK.changes.getEventsModule().emit('material-state-update', {changes: false});
    }
  }
  buffer = new SDK.app.UiBuffer(checkForMaterialChanges, 200);
  SDK.app.checkForMaterialChanges = buffer;
  SDK.changes.on('material-diff', onMaterialDiffComplete);
})();


// listen to events and save
SDK.controllers.material.on('material-added', function(){
  SDK.app.localsave();
  SDK.app.checkForChanges();
  SDK.app.checkForMaterialChanges();
});
SDK.controllers.material.on('material-update', function(){
  SDK.app.localsave();
  SDK.app.checkForChanges();
  SDK.app.checkForMaterialChanges();
});
SDK.controllers.material.on('material-removed', function(){
  SDK.app.localsave();
  SDK.app.checkForChanges();
  SDK.app.checkForMaterialChanges();
});
SDK.controllers.operation.on('operation-removed', function(){
  SDK.app.localsave();
  SDK.app.checkForChanges();
});
SDK.controllers.operation.on('operation-update', function(){
  SDK.app.localsave();
  SDK.app.checkForChanges();
});

// save every 30 seconds
setInterval(function(){
  SDK.app.localsave(true);
}, 1000*30);
