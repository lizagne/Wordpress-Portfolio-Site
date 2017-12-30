$(function() {
	
	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});
	
});

//cache nav ul parent and its height, nav items, all anchors with smooth scroll class, find all parts of page which will be targeted by scrollspy
var navLinks = $('#nav-ul li a');
var lastId, topMenu = $("#nav"),
topMenuHeight = topMenu.outerHeight() + 150,
menuItems = topMenu.find("#nav-ul li a"),
scrollLinks = $('a.smooth-scroll'),
scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});
var $email = $('.email');

$email.hide();