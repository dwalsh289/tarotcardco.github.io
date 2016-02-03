$(function(){

    $(window).scroll(function () {
    console.log($(document).scrollTop())
    var y = $(document).scrollTop();

    if (y > 400) {
        $("#menu").fadeIn();
    } else {
        $("#menu").fadeOut();
    };
    });
 



  });