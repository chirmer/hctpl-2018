$(document).ready(function () {
  // Main menu show & hide
  $("#btn-full-nav").click(function() {
    $("#full-nav").toggleClass("hidden");
    $("#btn-full-nav").toggleClass("purple");
  });
  // Search show & hide
  $("#btn-search-box").click(function() {
    $("#search-box").toggleClass("hidden");
    $("#btn-search-box").toggleClass("purple");
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
    var url = "https://www.google.com/search?&q=site%3Ahuntingtonpub.lib.in.us+" + searchInputA;
    window.open(url);
  });
  // Site home link
  $('#logo').click(function() {
    window.location = "http://beta.hctpl.info";
  })
  $('#logo-m').click(function() {
    window.location = "http://beta.hctpl.info";
  })
  $('#logo-n1').click(function () {
    window.location = "http://beta.hctpl.info";
  })
  $('#logo-m-n1').click(function () {
    window.location = "http://beta.hctpl.info";
  })

  $("#btn-request").click(function () {
    $("#request-item").toggleClass("hidden");
  });



  // Calendar code -------------------------------------------------------------

  $("#event-child").click(function () {
    $(".event-teen").toggleClass("hidden");
    $(".event-adult").toggleClass("hidden");
    $("#event-child").toggleClass("btn-green");
  });
  $("#event-teen").click(function () {
    $(".event-child").toggleClass("hidden");
    $(".event-adult").toggleClass("hidden");
    $("#event-teen").toggleClass("btn-green");
  });
  $("#event-adult").click(function () {
    $(".event-teen").toggleClass("hidden");
    $(".event-child").toggleClass("hidden");
    $("#event-adult").toggleClass("btn-green");
  });

  
});

// https://www.google.com/search?&q=site%3Ahuntingtonpub.lib.in.us+
