'use strict';


var saveTimer = -1;

FB.localsave = function(auto) {
  if( saveTimer !== -1 ) clearTimeout(saveTimer);

  saveTimer = setTimeout(function(){
    saveTimer = -1;
    FB._localsave(auto);
  }, 100);
};

FB._localsave = function(auto) {
  var t = new Date().getTime();
  var data = FB.getData();
  data.materials = [];

  var materials = FB.materialController.get();
  for( var key in materials.materials ) {
    if( key === 'Velpar') debugger;
    data.materials.push(materials.materials[key]);
  }
  for( var key in materials.complex ) {
    data.materials.push(materials.complex[key]);
  }

  window.localStorage.clear();
  window.localStorage.setItem('current-budget', data.id);
  window.localStorage.setItem(data.id, JSON.stringify(data));


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
