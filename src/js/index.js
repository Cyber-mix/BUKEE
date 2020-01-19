import "./import/modules";

$(document).ready(function(){
    $('.block-carousel').slick({
        dots: true,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$("#nextContent").click(function(){
    $("#nextContentList").fadeIn();
    $("#nextContent").hide();
  });