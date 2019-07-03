$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#dynamic').addClass('opaque-navbar');
    } else {
       $('#dynamic').removeClass('opaque-navbar');
    }
});


// bonemarrow
$('.carousel').carousel({
  interval: 2000
})