BudgetMaterialPopup.delete = function() {
  if( !confirm('Are you sure you want to delete this material?') ) return;

  var usedBy = {
    operations : [],
    materials : []
  };

  var operations = FB.operationController.get();
  for( var i = 0; i < operations.length; i++ ) {
    if( !operations[i].materials ) continue;
    if( operations[i].materials[this.data.name] ) {
      usedBy.operations.push(operations[i]);
    }
  }

  var materials = FB.materialController.get().complex;
  for( var key in materials ) {
    if( !materials[key].materials ) continue;
    if( materials[key].materials[this.data.name] ) {
      usedBy.materials.push(materials[key]);
    }
  }

  if( usedBy.operations.length > 0 || usedBy.materials.length > 0 ) {
    if( !confirm('This material is used by '+usedBy.operations.length+' operation(s) and '+usedBy.materials.length+' material(s).  '+
          'Are you still sure you want to delete?  It will be removed from these operations and materials.') ) {
      return;
    }
  }

  // remove from all operations
  var updates = usedBy.operations;
  for( var i = 0; i < usedBy.operations.length; i++ ) {
    delete usedBy.operations[i].materials[this.data.name];
  }
  FB.operationController.bulkAdd(updates, {replace: true});

  // remove from all materials
  updates = usedBy.materials;
  for( var i = 0; i < usedBy.materials.length; i++ ) {
    delete usedBy.materials[i].materials[this.data.name];
  }

  // remove this item
  FB.materialController.remove(this.data.name);

  // if this is complex and has unique materials, remove those as well
  if( this.data.type == 'complex' ) {
    for( var key in this.data.materials ) {
      if( key.match(/--/) ) {
        FB.materialController.remove(key);
      }
    }
  }

  FB.materialController.bulkAdd(updates, {replace: true});

  this.hide();
};
