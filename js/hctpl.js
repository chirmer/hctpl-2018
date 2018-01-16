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
  //Search Website
  $('#btn-search-website').click(function() {
    var searchInputA = $('#input-search').val();
    var url = "https://www.google.com/search?&q=site+huntingtonpub.lib.in.us+" + searchInputA;
    window.open(url);
  });
  // Site home link
  $('#logo-desktop').click(function() {
    window.location = "index.html";
  })
  $('#logo-mobile').click(function() {
    window.location = "index.html";
  })
  // Huntington Programs show & hide
  $("#prog-htgn").click(function() {
    $(".cal-day .btn-success").toggleClass("hidden");
  });
  // Markle Programs show & hide
  $("#prog-mkl").click(function() {
    $(".cal-day .btn-primary").toggleClass("hidden");
  });
});

// https://www.google.com/search?&q=site+huntingtonpub.lib.in.us+
