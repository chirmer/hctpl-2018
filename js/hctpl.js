$(document).ready(function () {
  // Main menu show & hide
  $("#btn-menu-main").click(function() {
    $("#menu-main").toggleClass("hidden");
    $("#btn-menu-main").toggleClass("bg-dark");
  });
  // Search show & hide
  $("#btn-search-box").click(function() {
    $("#search-box").toggleClass("hidden");
    $("#btn-search-box").toggleClass("bg-dark");
  });
  //Search Catalog
  $('#btn-search-catalog').click(function() {
    var searchInputA = $('#input-search').val();
    var url = "http://hctp.ent.sirsi.net/client/en_US/default/search/results?qu=" + searchInputA + "&te=ILS";
    window.open(url);
  });
});
