$(document).ready(function() {
 //Calculate the height of <header>
 //Use outerHeight() instead of height() if have padding
    var aboveHeight = $('header').outerHeight();
 // when scroll
    $(window).scroll(function(){
  //if scrolled down more than the header's height
  if ($(window).scrollTop() > aboveHeight){
   // if yes, add "fixed" class to the <sticknav>
   // add padding top to the #content (value is same as the height of the sticknav)
            $('sticknav').addClass('fixed').css('top','0').next().css('padding-top','60px');
        } else {
   // when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('sticknav').removeClass('fixed').next().css('padding-top','0');
        }
    });
});


$( document ).ready(function() {
    console.log( "ready!" );
	
	$( '.homebtn' ).click(function() {
		console.log( "scrolling" );
		
			$('html, body').animate({
				scrollTop: $("header").offset().top
				}, 1000);
			window.location = "index.html#";
		
	});
	
	$( '.aboutbtn' ).click(function() {
		console.log( "scrolling" );
		$('html, body').animate({
			scrollTop: $("#explanation").offset().top
			}, 1000);
		window.location = "index.html#explanation";
	});
	
	$( '.faqbtn' ).click(function() {
		console.log( "scrolling" );
		$('html, body').animate({
			scrollTop: $("#faq").offset().top
			}, 1000);
		window.location = "index.html#faq";
	});
	
	$( '.sponsorbtn' ).click(function() {
		console.log( "scrolling" );
		$('html, body').animate({
			scrollTop: $("#sponsors").offset().top
			}, 1000);
		window.location = "index.html#sponsors";
	});
	
	$( '.contactsbtn' ).click(function() {
		console.log( "scrolling" );
		$('html, body').animate({
			scrollTop: $("#contactTable").offset().top
			}, 1000);
	});
});


