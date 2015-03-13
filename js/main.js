$('document').ready(function() {
	
	//Intro Animation
	// Change class from A to B after 2800 ms fade in out between two
	
	setTimeout(function() {
		$("div.right-menu").fadeIn(500);
	}, 1);
	

	setTimeout(function() {
	  	$("div.right-menu").fadeOut(500);
	}, 2300);
	
	setTimeout(function() {
	  	$("div.right-menu").removeClass("right-menu").addClass("right-menu-still");
	}, 2800);

	setTimeout(function() {
	  	$("div.right-menu-still").fadeIn(500);
	}, 2800);	

// Color Picker	
	
	
 	$('a.color').click(function () {
 		var show = $(this).data('color');
     $('#colors').removeClass().addClass(show);	
 });

	// Drop Down Menu
	
	$('nav li ul').hide().removeClass('product-list');
    $('nav li').hover(
    function () {
    	$('ul', this).stop().slideDown(50);
  	},
  	function () {
    	$('ul', this).stop().slideUp(100);
  	});
	
$(".js-video").lightGallery({
	speed: 400,
});
	
	
});