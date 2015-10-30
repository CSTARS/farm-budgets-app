BudgetMaterialPopup.create = function(name) {
  var root = '';
  if( name && name.indexOf('--') > -1 ) {
    root = name.split('--')[0];
  }


  if( this.showing && !(this.action == 'edit' && this.data.name == root) ) {
    if( confirm('Do you want to save your changes before creating new material?') ) {
      this.save(true);
    } else {
      return;
    }
  }

  // see if we actually are trying to create a unique child
  if( root ) {
    var parts = name.split('--');
    var m = FB.materialController.get(parts[0]);
    if( m.type == 'complex' ) {
      this.edit(m, parts[1]);
      return;
    }
  }

  this.data = {
    type : 'simple',
    name : name || '',
    units : '',
    description : '',
    price : 0
  };
  this.action = 'create';

  this.$.title.innerHTML = 'Create Material';
  this.$.complexGroup.style.display = 'block';

  this.$.nameInput.value = name || '';
  this.$.unitsInput.setUnits('');
  this.$.unitsInputMsg.innerHTML = '';
  this.$.priceInput.value = '';
  this.$.descriptionInput.value = '';
  this.$.nameInputMessage.innerHTML = '';
  this.setComplex(false);

  this.parentMaterial = null;
  this.$.parentMaterial.innerHTML = '';

  this.$.historyBtn.style.display = 'none';

  this.show();
};
