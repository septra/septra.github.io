
function scrollTo(section) {
	var sticky_nav = $('.main-nav').outerHeight();
  $('html,body').animate({scrollTop: $(section).offset().top - sticky_nav}, 800);
}

$(document).ready(function() {
	// sticky nav
	var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    var sticky_navigation_offset_top = $('.main-nav').offset().top;

	$(window).scroll(function() {
	  if( $(this).scrollTop() > sticky_navigation_offset_top ) {
	    mn.addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});

	init();
});


//basic map config with custom fills, mercator projection
var map = new Datamap({
element: document.getElementById('mapcontainer'),
projection: 'orthographic',
projectionConfig: {
          rotation: [-77,0]
        },
geographyConfig: {
		//highlightOnHover: false,
		popupOnHover: false
}
});
map.graticule();
