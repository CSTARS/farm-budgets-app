'use strict';


var saveTimer = -1;

FB.materialLink = function(name) {
  return '#budget/materials/'+encodeURIComponent(name);
}

FB.materialIcon = function(type) {
  return '<i class="fa fa-cube'+(type === 'complex' ? 's' : '')+'"></i>';
}

FB.hasAccess = function(object) {
  var user = ExpressAuth.user;

  if( !object || !user ) return false;

  if( user.admin ) return true;

  if( typeof object === 'string' ) {
    object = {authority: object};
  } else if( !object.authority ) {
    return false;
  }

  if( user.authorities.indexOf(object.authority) === -1 &&
      user.username !== object.authority ) {

      return false;
  }

  return true;
}

FB.saveBudget = function(callback) {
  FB.localsave();

  var budget = $.extend(true,{}, FB.getBudget());
  FB.save.strip(FB.save.schema.budget, budget);

  budget.materialIds = [];

  var materials = FB.materialController.get();
  for( var name in materials ) {
    if( !materials[name].id ) continue;
    budget.materialIds.push(materials[name].id);
  }

  $.post('/budget/save', budget, function(resp){
    if( callback ) callback(resp);

    if( resp.error ) {
      return alert(resp.message);
    }

    // the server may have cleanup some stuff
    // true flag forces reload without prompt
    document.querySelector('ahb-budget').reload(budget.id, true);
  }.bind(this));
}

FB.localsave = function(auto) {
  if( saveTimer !== -1 ) clearTimeout(saveTimer);

  saveTimer = setTimeout(function(){
    saveTimer = -1;
    FB._localsave(auto);
  }, 100);
};

FB._localsave = function(auto) {
  var t = new Date().getTime();
  var data = {
    budget : FB.getBudget(),
    materials : []
  }

  if( !data.budget.id ) return;

  var materials = FB.materialController.get();
  for( var key in materials ) {
    data.materials.push(materials[key]);
  }

  window.localStorage.setItem('current-budget', data.budget.id);
  window.localStorage.setItem(data.budget.id, JSON.stringify(data));
  FB.localdata = data;

  console.log('Local '+(auto ? 'auto ' : '') +'save: '+(new Date().getTime() - t)+'ms');
}

// listen to events and save
FB.materialController.on('material-update', function(){
  FB.localsave();
});
FB.materialController.on('material-removed', FB.localsave);
FB.operationController.on('operation-removed', FB.localsave);
FB.operationController.on('operation-update', FB.localsave);

// save every 30 seconds
setInterval(function(){
  FB.localsave(true);
}, 1000*30);
