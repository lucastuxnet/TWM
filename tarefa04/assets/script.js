
/* Animação da sidbar */

$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});
$('.primeiro-btn').click(function () {
    $('nav ul .primeiro-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.segundo-btn').click(function() {
    $('nav ul .segundo-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});
$('.terceiro-btn').click(function() {
    $('nav ul .terceiro-show').toggleClass("show2");
    $('nav ul .third').toggleClass("rotate");
});
$('.quarto-btn').click(function() {
    $('nav ul .quarto-show').toggleClass("show3");
    $('nav ul .fourth').toggleClass("rotate");
});
$('.quinto-btn').click(function() {
    $('nav ul .quinto-show').toggleClass("show4");
    $('nav ul .fifth').toggleClass("rotate");
});
$('.sexto-btn').click(function() {
    $('nav ul .sexto-show').toggleClass("show5");
    $('nav ul .sixth').toggleClass("rotate");
});
$('.setimo-btn').click(function() {
    $('nav ul .setimo-show').toggleClass("show6");
    $('nav ul .seventh').toggleClass("rotate");
});
$('.oitavo-btn').click(function() {
    $('nav ul .oitavo-show').toggleClass("show7");
    $('nav ul .eighth').toggleClass("rotate");
});
$('.nono-btn').click(function() {
    $('nav ul .nono-show').toggleClass("show8");
    $('nav ul .nineth').toggleClass("rotate");
});
$('.decimo-btn').click(function() {
    $('nav ul .decimo-show').toggleClass("show9");
    $('nav ul .tenth').toggleClass("rotate");
});
$('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});