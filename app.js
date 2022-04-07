
$('.button').click(function fadeBtn(){
    $('html').fadeOut(2000, function(){
        window.location='about.html';
    });
});


$('#menu-bar').click(function(){
    $('#side-bar').toggle(1000);
});


$('.about-page').fadeIn(1800);
$('.experience-page').fadeIn(1500);
$('.contact-page').fadeIn(1500);




