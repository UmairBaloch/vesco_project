// SERVICES


// document.ready(){

// }

// this method is used to make function
// available after the page is ready

//short form

$(function(){
	// animate on scroll
	new WOW().init();
});


// Work

$(function(){
	$("#work").magnificPopup({

		// child items selector, by clicking on it 
		// popup will open
		delegate: 'a',
		type: 'image',
		// other options
		gallery: {
			enabled: true
		}
	});
});



// Team


$(function(){
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 1000,
		loop: true,
		autoplayHoverPause: true,
		responsive:{
			//breakpoints from 0 to up

			0:{
				items: 1
			},
			// breakpoint from 480 up

			480:{
				items: 2
			},

			// breakpoint from 768 up
			 768:{
			 	items: 3
			 }
		}
	});
});

/*====================================
            TESTIMONIALS
====================================== */


$(function(){
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 1000,
		loop: true,
		autoplayHoverPause: true
	});
});

/*====================================
            STATS
====================================== */



$(function(){
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});
});

/*====================================
           CLIENTS
====================================== */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
    });
});

/*====================================
           SMOOOTH SCROLLING
====================================== */

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");
        $('html, body').animate({
            // scrollTop Property
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo"); // this animation will take 1.2s
    });
});

/*====================================
           NAVIGATION
====================================== */
// Show/Hide transparent black navigation
$(function () {
    // here we have window object and scroll event
    $(window).scroll(function () {
        // this is used to refer current object means this
        // window object
        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }

    });
});


// Close mobile menu onclick

$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});
































































