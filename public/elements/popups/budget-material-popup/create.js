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

  var budget = FB.getData();

  var defaultAuthority = budget.authority;
  if( ExpressAuth.user && ExpressAuth.user.authorities ) {
    if( ExpressAuth.user.authorities.indexOf(defaultAuthority) == -1 ) {
      defaultAuthority = ExpressAuth.user.username;
    }
  }

  this.data = {
    type : 'simple',
    name : name || '',
    units : '',
    description : '',
    price : 0,
    authority : defaultAuthority,
    locality : budget.locality || []
  };
  this.action = 'create';
  this.$.saveBtn.innerHTML = 'Create';

  this.$.title.innerHTML = 'Create Material';
  this.$.complexGroup.style.display = 'block';

  this.$.nameInput.value = name || '';
  this.$.unitsInput.setUnits('');
  this.$.unitsInputMsg.innerHTML = '';
  this.$.priceInput.value = '0';
  this.$.descriptionInput.value = '';
  this.$.nameInputMessage.innerHTML = '';
  this.setComplex(false);

  this.$.advancedPanel.data = this.data;

  this.parentMaterial = null;
  this.$.parentMaterial.innerHTML = '';

  this.$.historyBtn.style.display = 'none';
  this.$.deleteBtn.style.display = 'none';

  // used by suggest
  this.currentIds = [];
  var materials = FB.materialController.get();
  for( var type in materials ) {
    for( var name in materials[type] ) {
        if( materials[type][name].id ) {
          this.currentIds.push(materials[type][name].id);
        }
    }
  }

  this.show();
};
