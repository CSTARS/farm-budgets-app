BudgetMaterialPopup.remove = function() {
  var usedBy = {
    operations : []
  };

  /*var operations = FB.operationController.get();
  for( var i = 0; i < operations.length; i++ ) {
    if( !operations[i].materials ) continue;
    for( var j = 0; j < operations[i].materials.length; j++ ) {
      if( operations[i].materials[j].name === this.data.name ) {
        usedBy.operations.push(operations[i]);
        break;
      }
    }
  }

  // remove from all operations
  var updates = usedBy.operations;
  for( var i = 0; i < usedBy.operations.length; i++ ) {
    delete usedBy.operations[i].materials[this.data.name];
  }
  FB.operationController.bulkAdd(updates, {replace: true});*/

  // remove this item from controller, events trigger ui updates
  FB.materialController.remove(this.data.name);

  FB.changes.removeMaterial(this.data);

  this.hide();
};

BudgetMaterialPopup.delete = function() {
  this.remove();

  $.get('/materials/delete?id='+this.data.id, function(resp){
    if( resp.error ) {
      alert(resp.message);
    }

    // true flag sets the material as deleted
    FB.changes.updateMaterial(this.data, true);
  }.bind(this));
}
