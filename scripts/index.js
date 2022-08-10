
$("#landing .hidden").animate({opacity: 1}, 1500).removeClass("hidden");
$(".landing-photo").animate({right: 0}, 1500).removeClass("hidden");


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > ($("#landing").offset().top + $("#landing").outerHeight()) ){
        $('.menu').removeClass('hidden');
    } 
    if ($(window).scrollTop() < ($("#landing").offset().top + $("#landing").outerHeight())){
        $('.menu').addClass('hidden');
    } 

    if ($(window).scrollTop() > $("#reviews").offset().top) {
        $('.menu').addClass('red-colored').removeClass('dark-colored');
    } 
    if ($(window).scrollTop() < $("#reviews").offset().top) {
        $('.menu').addClass('dark-colored').removeClass('red-colored');
    } 

    if ($(window).scrollTop() > $("#cta").offset().top && $(window).scrollTop() < $("#scroll-stop").offset().top) {
        $('.menu').addClass('hidden');
    } 
    if ($(window).scrollTop() > $("#reviews").offset().top  && $(window).scrollTop() < $("#cta").offset().top) {
        $('.menu').removeClass('hidden');
    } 

    if ($(window).scrollTop() > $("#scroll-stop").offset().top) {
        $('.menu').removeClass('hidden');
    } 
    if ($(window).scrollTop() > $("#cta").offset().top  && $(window).scrollTop() < $("#scroll-stop").offset().top) {
        $('.menu').addClass('hidden');
    } 
    if ($(window).scrollTop() > ($("#about").offset().top - $( window ).height() * .5)) {
        $('.menu').addClass('red-colored').removeClass('dark-colored');
    } 
    if ($(window).scrollTop() > $("#scroll-stop").offset().top  && $(window).scrollTop() < $("#about").offset().top) {
        $('.menu').addClass('dark-colored').removeClass('red-colored');
    } 

});
