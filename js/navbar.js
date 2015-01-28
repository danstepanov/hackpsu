
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
			scrollTop: $("#about").offset().top
			}, 1000);
		window.location = "index.html#about";
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
			scrollTop: $("#contact").offset().top
			}, 1000);
		window.location = "index.html#contact";
	});
});


