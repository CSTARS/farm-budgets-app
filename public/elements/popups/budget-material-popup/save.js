BudgetMaterialPopup.save = function(noHide) {
  if( this.saving ) {
    console.log('Already saving');
    return;
  }

  // check name
  if( this.data.name == '' ) {
    this.$.nameInputMessage.innerHTML = 'A material name is required';
    return;
  } else if( this.data.name.indexOf('--') > -1 ) {
    this.$.nameInputMessage.innerHTML = '"--" is reserved and not allowed in the material name.';
    return;
  }
  this.$.nameInputMessage.innerHTML = '';

  // check access
  if( ExpressAuth.user ) {
    // check if user has access to authroity
    if( !FB.utils.hasAccess(ExpressAuth.user, this.data.authority) ) {
      this.$.authorityMessage.innerHTML =
        '<div class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>You do not have access to the authority '+
        '<b><i class="fa fa-shield"></i> '+this.data.authority+'</b>.  Please select a new authority in '+
        'the <b><i class="fa fa-cog"></i> advanced</b> section.  If you do not belong to an authority, select your username as the authority.</div>';
      return;

    // if the user doesn't have access to the original authority but has access to
    // the new authority, save as a new material
    } else if( this.action == 'edit' &&
      this.data.authority != this.originalData.authority &&
      !FB.utils.hasAccess(ExpressAuth.user, this.originalData.authority)  ) {
        this.data.id = FB.utils.guid();
    }
  }
  this.$.authorityMessage.innerHTML = '';

  this.$.advancedPanel.save();

  var options = {};
  if( this.action == 'edit' ) {
    options.replace = true;

    // if the name has changed, make sure we preform a rename
    if( this.originalData.name != this.data.name ) {
      options.rename = this.originalData.name;
    }

    // if the user has access to the original authority but changed authority or
    // location, prompt to see if they really want to update or save as new.
    if( FB.utils.hasAccess(ExpressAuth.user, this.originalData.authority) &&
        (this.originalData.authority !== this.data.authority ||
        this.originalData.locality.join('') !==  this.data.locality.join('')) ) {

        this._savePrompt(noHide, options);
        return;
    }
  }

  this._save(noHide, options);
}

BudgetMaterialPopup._savePrompt = function(noHide, options) {
  this.hide();

  setTimeout(function(){

    document.querySelector('budget-material-save-prompt').show(function(resp){
      if( resp.cancel ) {
        this.show();
        return;
      }
      if( resp.saveAsNew ) {
        this.data.id = FB.utils.guid();
      }

      this._save(noHide, options);
    }.bind(this));

  }.bind(this), 300);
},

BudgetMaterialPopup._save = function(noHide, options) {
  this.setSaving(true);

  // save locally
  FB.localsave();

  var result = FB.materialController.add(this.data, options);
  if( result.error ) {
    this.setSaving(false);
    return alert(result.message);
  }

  // if the material is a 'save as new', update operations
  if( this.originalData && this.action === 'edit' ) {
    if( this.originalData.id !== this.data.id ) {
      FB.operationController.replaceMaterial(this.data.name, this.data.id);
    }
  }

  // now re-save all required materials, this time we will fire events
  var requiredMaterials = [];
  if( this.data.type == 'complex' ) {
    for( var key in this.data.materials ) {
      if( !key.match(/--/) ) continue;
      var m = FB.materialController.get(key);
      if( m.error ) continue;

      m.parent = this.data.id;
      m.authority = this.data.authority;
      m.locality = this.data.locality;
      requiredMaterials.push(m);
    }
  }

  if( requiredMaterials.length > 0 ) {
    FB.materialController.bulkAdd(requiredMaterials, {replace: true});
  }

  // save remote
  $.post('/materials/save', this.data, function(resp){
    this._onSaveComplete(noHide, requiredMaterials, resp);
  }.bind(this));
}

BudgetMaterialPopup._onSaveComplete = function(noHide, requiredMaterials, resp) {
  if( resp.error ) {
    console.log(resp);
    alert('Failed to save to server.  '+resp.message+'.\n\n  Your material has been saved locally.');
    this.setSaving(false);
    return;
  }

  if( this.data.type === 'simple' || requiredMaterials.length === 0 ) {
    if( typeof noHide !== 'boolean' || !noHide ) this.hide();
    this.setSaving(false);
    return;
  }


  $.post('/materials/saveBulk', {materials: requiredMaterials}, function(resp){
    this.setSaving(false);

    if( resp.error ) {
      alert('Failed to save required materials :(');
      console.log(resp);
      return;
    }

    for( var i = 0; i < resp.results.length; i++ ) {
      if( resp.results[i].error ) {
        alert('Failed to save required materials :(');
        console.log(resp);
        return;
      }
    }

    if( typeof noHide !== 'boolean' || !noHide ) this.hide();
  }.bind(this));
}

BudgetMaterialPopup.setSaving = function(saving) {
  this.saving = saving;
  if( saving ) {
    this.$.saveBtn.innerHTML = 'Saving...';
    this.$.saveBtn.setAttribute('disabled', 'disabled');
  } else {
    this.$.saveBtn.innerHTML = 'Save';
    this.$.saveBtn.removeAttribute('disabled');
  }
};

/*_saveRequiredMaterials : function(index, keys, callback) {
  // TODO: need to save all unique materials
},*/