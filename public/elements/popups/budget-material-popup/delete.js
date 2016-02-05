BudgetMaterialPopup.remove = function() {
  var usedBy = {
    operations : []
  };

  // remove this item from controller, events trigger ui updates
  SDK.controllers.material.remove(this.data.name);

  SDK.changes.removeMaterial(this.data);

  this.hide();
};

BudgetMaterialPopup.delete = function() {
  this.remove();

  SDK.materials.delete(this.data.id, function(resp){
    if( resp.error ) {
      alert(resp.message);
      return;
    }

    // true flag sets the material as deleted
    SDK.changes.updateMaterial(this.data, true);
  }.bind(this));
}
