/* PAGE:BEFORE */

var large = window.matchMedia( "screen and (min-width: 1024px)" );
var medium = window.matchMedia( "screen and (min-width: 768px" );


/* Mobile Menu */

var nav = document.querySelector( "#header_nav" ),
navToggle = document.querySelector( "#navwrap .skip" );
if ( navToggle ) {
	navToggle.addEventListener( "click", function( e ) {
		if ( nav.className == "open" ) {
			nav.className = "";
			$(".skip button").removeClass("close");
		} else {
			nav.className = "open";
			$(".skip button").addClass("close");

		}
		e.preventDefault();
	}, false );
}

/* From Bottom To Top */

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});



/* Cookie Bar */

$(document).ready(function() {
	 $('.cookie-message').cookieBar({ closeButton : '.cookie-close' });
});



