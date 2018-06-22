$(function(){
  $("#categories").click(function(event){
    event.stopPropagation();
    $("#thirdDropdown").show();
    $('#dropdown').hide();
    $('#secondDropdown').hide();
  });
});

$(function(){
  $("#cont").click(function(event){
    event.stopPropagation();
    $("#dropdown").show();
    $('#thirdDropdown').hide();
    $('#secondDropdown').hide();
  });
});

$(function(){
  $("#about").click(function(event){
    event.stopPropagation();
    $("#secondDropdown").show();
    $('#thirdDropdown').hide();
    $('#dropdown').hide();
  });
});

$(document).click(function(){
    $('#thirdDropdown').hide();
    $('#dropdown').hide();
    $('#secondDropdown').hide();
});


$(function(){
  $(".button").hover(function(){
    $(this).toggleClass("highlight");
  });
});

$(function(){
  $(".selection").click(function(){
  x = $(this).data("category");
  $(".item").hide();
  $("."+x).show();
    });
});

$(function(){
  $("ul:first-child").click(function(){
    $(".item").show();
    $(".hidden").hide();
  });
});
