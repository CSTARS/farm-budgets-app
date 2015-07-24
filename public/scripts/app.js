(function(){

  $(window).on('hashchange', changePage);
  var pages = ['location', 'crop', 'budget']

  $(document).ready(function(){
    $('ahb-page-location').on('location-select', onLocationSelected)
    $('ahb-page-crop').on('crop-size-update', onCropSizeSelected);

    $('#infoModal').modal('show');

    changePage();
  });


  function onLocationSelected(e) {
    $('ahb-page-crop')[0].updateLocation(e.originalEvent.detail);
  }

  function onCropSizeSelected(e) {
    $('ahb-page-budget')[0].updateCropSize(e.originalEvent.detail);
  }

  function changePage() {
    var page = window.location.hash.replace(/#/,'');

    if( pages.indexOf(page) == -1 ) page = 'location';

    $('.page').hide();
    $('[nav-btn]').parent().removeClass('active');

    $('#'+page).show();
    $('a[href="#'+page+'"][nav-btn]').parent().addClass('active');

    if( page == 'location' && $('#location')[0].resize ) $('#location')[0].resize();
    if( page == 'budget' ) $('#budget')[0].redrawCharts();
  }

})();

function showInfo() {
  $('#infoModal').modal('show');
}
