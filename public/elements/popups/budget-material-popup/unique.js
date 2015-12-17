BudgetMaterialPopup.editUnique = function(name) {
  if( !this.data.unique ) {
    return alert('Material has no unique material: '+name);
  } else if( !this.data.unique[name] ) {
    return alert('Material has no unique material: '+name);
  }

  this.$.uniqueNameInput.value = name;
  this.$.uniqueUnitsInput.units = FB.units.invert(this.data.unique[name].units);
  this.$.uniquePriceInput.value = this.data.unique[name].price;
  this.$.createUniqueMsg.innerHTML = '';

  this.$.createUniqueBtn.innerHTML = 'Update';

  this.showUnique();
}

BudgetMaterialPopup.createUnique = function() {
  var data = {
    name : this.$.uniqueNameInput.value,
    units : this.$.uniqueUnitsInput.getUnits(),
    price : parseFloat(this.$.uniquePriceInput.value)
  }

  if( data.name == '' ) {
    this.$.createUniqueMsg.innerHTML = 'You must provide a material name';
    return;
  } else if( isNaN(data.price) ) {
    this.$.createUniqueMsg.innerHTML = 'Invalid price';
    return;
  } else if( this.$.uniqueUnitsInput.error ) {
    this.$.createUniqueMsg.innerHTML = 'You must provide valid units';
    return;
  }

  if( !this.data.unique ) {
    this.data.unique = {};
  }

  data.units = 'us$/'+data.units;

  // do we need to add a simple impl?
  if( !this.data.materials[data.name] ) {
    var impl = {
      name : data.name,
      amount : 1,
      units : FB.units.invert(data.units)
    }
    this.data.materials[impl.name] = impl;
  } else {
    this.data.materials[data.name].units = FB.units.invert(data.units);
  }

  this.data.unique[data.name] = data;

  FB.materialController.add(this.data, {replace: true});
  this.recalc();

  // this just resets and hides
  this.cancelCreateUnique();
};

/*BudgetMaterialPopup.onUniqueClassChange = function() {
  if( this.$.uniqueNameInput.value == '' || this.$.uniqueClassInput.isClass(this.$.uniqueNameInput.value) ) {
    this.$.uniqueNameInput.value = this.$.uniqueClassInput.getValue();
  }
};*/

BudgetMaterialPopup.cancelCreateUnique = function() {
  this.$.uniqueNameInput.value = '';
  this.$.uniqueUnitsInput.units = '';
  this.$.uniquePriceInput.value = '';
  this.$.createUniqueMsg.innerHTML = '';

  this.toggleUnique();
};
