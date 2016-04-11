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

  login : function() {
    window.localStorage.setItem('login-redirect', window.location.pathname+window.location.hash);
    window.location = '/auth/signin';
  },

  getMaterialLink : function(name) {
    return '#budget/materials/'+encodeURIComponent(name);
  },

  getMaterialIconHTML : function(type) {
    return '<i class="fa fa-cube'+(type === 'complex' ? 's' : '')+'"></i>';
  },

  getAliasIconHTML : function(m) {
    if( m instanceof SDK.Material ) {
      m = m.data;
    }

    if( !m.alias ) return '';
    return ' <span class="label label-primary"><i class="fa fa-tag"></i> '+m.alias+'</span>';
  },

  hasAccess : function(object) {
    var user = ExpressAuth.user;

    if( !object || !user ) return false;

    if( user.admin ) return true;

    if( typeof object === 'string' ) {
      object = {authority: object};
    } else if( object instanceof SDK.Material || object instanceof SDK.Budget ) {
      object = {authority: object.getAuthority()};
    } else if( !object.authority ) {
      return false;
    }

    if( user.authorities.indexOf(object.authority) === -1 &&
        user.email !== object.authority ) {

        return false;
    }

    return true;
  },

  createReferenceBudget : function() {
      var data = {
        budget : SDK.getBudget().getData(),
        materials : SDK.controllers.material.asArray()
      }

      // otherwise this data is already set
      if( !data.budget.reference ) {
        data.budget.reference = data.budget.id;
        data.budget.referenceInfo = {
          name : data.budget.name,
          commodity : data.budget.commodity,
          authority : data.budget.authority,
          locality : data.budget.locality
        }
      }

      data.budget.name = data.budget.name+' - Reference';
      data.budget.id = SDK.utils.guid();

      SDK.app.creating = true;
      SDK.setBudget(data);

      window.location = '#'+data.budget.id;
      setTimeout(function(){
        document.querySelector('budget-farm-editor').show(true);
      }, 500);
  },

  cloneBudget : function() {
    var data = {
      budget : SDK.getBudget().getData(),
      materials : SDK.controllers.material.asArray()
    }

    data.budget.name = '';
    data.budget.id = SDK.utils.guid();

    SDK.app.creating = true;
    SDK.setBudget(data);

    window.location = '#'+data.budget.id;
    document.querySelector('budget-farm-editor').show(true);
  },

  createNew : function() {
    var newData = {
      budget : {
        id : SDK.utils.guid(),
        authority : ExpressAuth.user ? ExpressAuth.user.email : '',
        locality : [],
        name : '',
        commodity : '',
        farm : {
          name : '',
          units : '[acr_us]',
          size : 1
        },
        operations : [],
      },
      materials : []
    };

    SDK.app.creating = true;
    SDK.setBudget(newData);

    window.location = '#'+newData.budget.id;
    document.querySelector('budget-farm-editor').show(true);
  }
};

(function(){
  function autoSave() {
    var budget = $.extend(true,{}, SDK.getBudget().getData());

    if( !SDK.app.hasAccess(budget) ) {
      document.querySelector('ahb-budget').showWarning();
      return;
    }

    SDK.emit('auto-save-start');
    SDK.utils.strip(SDK.schema().budget, budget);

    SDK.budgets.save(budget, function(resp){
      SDK.emit('auto-save-stop', resp);

      if( resp.error ) {
        return alert(resp.message);
      }

      SDK.app.creating = false;
    }.bind(this));
  }

  SDK.app.autoSave = new UiBuffer(autoSave, 1000);
})();


// listen to events and save
SDK.controllers.material.on('material-added', function(){
  SDK.app.autoSave();
});
SDK.controllers.material.on('material-update', function(){
  SDK.app.autoSave();
});
SDK.controllers.material.on('material-removed', function(){
  SDK.app.autoSave();
});
SDK.controllers.operation.on('operation-removed', function(){
  SDK.app.autoSave();
});
SDK.controllers.operation.on('operation-update', function(){
  SDK.app.autoSave();
});
