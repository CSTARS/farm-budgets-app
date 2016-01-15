'use strict';


var saveTimer = -1;

SDK.app = {
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

  saveBudget : function(callback) {
    SDK.app.localsave();

    var budget = $.extend(true,{}, SDK.getBudget());
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
      budget : SDK.getBudget(),
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


// listen to events and save
SDK.controllers.material.on('material-update', function(){
  SDK.app.localsave();
});
SDK.controllers.material.on('material-removed', SDK.app.localsave);
SDK.controllers.operation.on('operation-removed', SDK.app.localsave);
SDK.controllers.operation.on('operation-update', SDK.app.localsave);

// save every 30 seconds
setInterval(function(){
  SDK.app.localsave(true);
}, 1000*30);
