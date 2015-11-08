BudgetMaterialPopup.remove = function() {

  var usedBy = {
    operations : [],
//    materials : []
  };

  var operations = FB.operationController.get();
  for( var i = 0; i < operations.length; i++ ) {
    if( !operations[i].materials ) continue;
    if( operations[i].materials[this.data.name] ) {
      usedBy.operations.push(operations[i]);
    }
  }

  // remove from all operations
  var updates = usedBy.operations;
  for( var i = 0; i < usedBy.operations.length; i++ ) {
    delete usedBy.operations[i].materials[this.data.name];
  }
  FB.operationController.bulkAdd(updates, {replace: true});

  // remove this item
  FB.materialController.remove(this.data.name);

  this.hide();
};

BudgetMaterialPopup.delete = function() {
  this.remove();

  $.get('/materials/delete?id='+this.data.id, function(resp){
    if( resp.error ) {
      alert(resp.message);
    }
  }.bind(this));
}
