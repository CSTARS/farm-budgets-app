BudgetMaterialPopup.onPriceChange = function() {
  FB.materialController.materialRecalc(this.data);

  // do not call recalc, will update material table
  this.updatePriceLabel();
};

BudgetMaterialPopup.onMaterialDelete = function(e) {
  var name = e.detail.name;

  if( this.data.unique && this.data.unique[name] ) {
    delete this.data.unique[name];
  }

  this.updatePriceLabel();
};
/**
 * End fired by the material table
 */

/**
 * Start main input control Fn's
 */
BudgetMaterialPopup.onNameInput = function() {
  var newName = this.$.nameInput.value;


  if( this.data.name == newName || newName == '' ) return;

  var m = FB.materialController.get(newName);
  if( !m.error ) {
    this.$.nameInputMessage.innerHTML = 'A material with this name already exists';
    return;
  }
  this.$.nameInputMessage.innerHTML = '';

  this.data.name = newName;

  // if complex, we need to update the name of all unique materials
  if( this.data.type == 'complex' ) {
    var updated = [];

    for( var i = 0; i < updated.length; i++ ) {
      this.data.materials[updated[i].name] = updated[i];
    }

    this.$.materialTable.setMaterials(this.data, this.materialTableOptions);
  }

  if( this.action == 'create' ) {
    this.suggest();
  }
};

BudgetMaterialPopup.onDescriptionInput = function() {
  this.data.description = this.$.descriptionInput.value;
};

BudgetMaterialPopup.onPriceInput = function() {
  var val = this.$.priceInput.value;

  var val = parseFloat(val);
  if( isNaN(val) ) return;

  this.data.price = val;

  this.recalc();
};

BudgetMaterialPopup.onRequiredUnitsChange = function(e) {
  this.data.materials[e.detail.name].units = e.detail.impl.units;
  this.recalc();
}

BudgetMaterialPopup.onMaterialSelect = function(e) {
  var materialDef = e.detail;

  var materialImpl = {
    name : materialDef.name,
    amount : 1
  }

  if( materialDef.type == 'complex' ) {
    materialImpl.units = materialDef.units;
  } else {
    materialImpl.units = FB.units.invert(materialDef.units);
  }

  this.data.materials[materialImpl.name] = materialImpl;
  this.recalc();
};

BudgetMaterialPopup.onEditUnique = function(e) {
  this.editUnique(e.detail);
}
