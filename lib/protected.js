module.exports = {
  '/authority/get/all' : 'login',
  '/authority/get' : 'login',
  '/authority/create' : 'login',
  '/authority/grantAccess' : 'login',
  '/authority/removeAccess' : 'login',
  '/authority/update' : 'login',

  '/budget/contributedTo' : 'login',
  '/budget/delete' : 'login',
  '/budget/save' : 'login',

  '/materials/mapReduceAll' : 'admin',
  '/materials/delete' : 'admin',
  '/materials/save' : 'admin',

  '/members/search' : 'login'
};
