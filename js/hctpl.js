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
    window.location = "index.html";
  })
  $('#logo-m').click(function() {
    window.location = "index.html";
  })
  $('#logo-n1').click(function () {
    window.location = "../index.html";
  })
  $('#logo-m-n1').click(function () {
    window.location = "../index.html";
  })
  // Huntington Programs show & hide
  $("#prog-htgn").click(function() {
    $(".cal-day.btn-success").toggleClass("hidden");
  });
  // Markle Programs show & hide
  $("#prog-mkl").click(function() {
    $(".cal-day.btn-primary").toggleClass("hidden");
  });

  // Calendar code -------------------------------------------------------------


  $("#filter-htgn").click(function() {
    $("#filter-htgn").toggleClass("list-group-item-primary");
    $(".ev-h").toggleClass("hidden");
    $("#filter-htgn .fa-check").toggleClass("invisible");
  });

  $("#filter-mkl").click(function() {
    $("#filter-mkl").toggleClass("list-group-item-success");
    $(".ev-m").toggleClass("hidden");
    $("#filter-mkl .fa-check").toggleClass("invisible");
  });

  $("#filter-adult").click(function() {
    $("#filter-adult").toggleClass("list-group-item-secondary");
    $(".event").not(".ev-a").toggleClass("hidden");
    $("#filter-adult .fa-check").toggleClass("invisible");
  });

  $("#filter-teen").click(function() {
    $("#filter-teen").toggleClass("list-group-item-secondary");
    $(".event").not(".ev-t").toggleClass("hidden");
    $("#filter-teen .fa-check").toggleClass("invisible");
  });

  $("#filter-youth").click(function() {
    $("#filter-youth").toggleClass("list-group-item-secondary");
    $(".event").not(".ev-y").toggleClass("hidden");
    $("#filter-youth .fa-check").toggleClass("invisible");
  });

  $(function(){
    $('.card-subtitle').each(function(key,value){
        console.log(value);
        var currentDate = new Date();
        var date = new Date(value);
        if(date < currentDate){
            $(value).parent().parent().remove();
        }
    });
});
});

// https://www.google.com/search?&q=site%3Ahuntingtonpub.lib.in.us+
