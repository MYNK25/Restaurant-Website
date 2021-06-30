//js to display and switch the clauses on the gift card form

var clause_parents = [];
var delivery_options = [];

var url = window.location.href;
console.log(url);
if (url.indexOf('brisbane-queen-street-mall') > -1) {
    window.location = "https://www.sonorestaurant.com.au/";
    //window.location = "https://dev.romeo.digital/sono/";
}


$(document).ready(function () {
    for (i = 1; i < 4; i++) {
        clause_parents.push($("#gift_card_hide_" + i.toString()).parent());
        clause_parents[i - 1].addClass("clause");

        if (i == 1) {
            clause_parents[0].addClass("show-clause");
        }
    }
    $("#gift_card_delivery option").each(function () {
        delivery_options.push($(this));
    });
    console.log(delivery_options);
});

$("#gift_card_delivery").change(function () {
    console.log("test");
    var chosen_option = $("#gift_card_delivery option:selected");
    //console.log(chosen_option.attr("value"));
    //console.log(delivery_options[1].attr("value"));

    for (i = 0; i < delivery_options.length; i++) {
        if (chosen_option.attr("value") == delivery_options[i].attr("value")) {
            console.log("yes");
            clause_parents[i].addClass("show-clause");
        } else {
            clause_parents[i].removeClass("show-clause");
        }
    }
});





//For making the half panels match each other in height.

$(document).ready(function () {
    $(function () {
        //match element heights
        $('.match-half').matchHeight();
        $('.match-contact-panel').matchHeight();
        $('.match-inner-wrapper').matchHeight();
    });

    //enable gestures for carousels
    $("#myCarousel1, #myCarousel2, #myCarousel3").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#myCarousel1, #myCarousel2, #myCarousel3").swipeleft(function () {
        $(this).carousel('next');
    });
});

$(window).ready(function () {
    if (window.location.href.indexOf("#payment-confirmation") > -1) {
        //alert("Thank you for purchasing your Sono Gift Card. Your payment was successful. We look forward to seeing you at Sono soon.");
        setTimeout(function () {
            $("#confirmation-popup").addClass("open");
        }, 1000);
    }
});

$("#confirmation-popup #close-confirmation").click(function () {
    //console.log("test confirm");
    $("#confirmation-popup").removeClass("open");
});

/*
function init(lat, long) {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(lat, long), //Portside
        //-27.468620, 153.026961

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        //-27.468620, 153.026961
        map: map,
        title: 'Sono Map'
    });
}
*/

function scroll_to_anchor(name) {
    var anchor_id = $("#" + name);
    $('html,body').animate({ scrollTop: anchor_id.offset().top }, 'slow');
}

$(".scroll-to-anchor").click(function () {
    scroll_to_anchor($(this).attr("name"));
});

/*
$(document).ready(function() {
    $("form").submit(function() {
        var anchor_id = $("#contact");
        console.log(anchor_id.offset().top);
        $('html,body').animate({ scrollTop: anchor_id.offset().top }, 'slow');
    });
});
*/



/* Extra behavioural changes for the Stripe and WP Simple Pay for Stripe checkout and form */

$(document).ready(function () {
    //set 20 character limit.
    $("#gift_card_message").attr('maxlength', '20');
    $("#gift_card_phone_number").attr('maxlength', '15'); //to stop huge spam entries
    //$("#gift_card_first_name").attr('maxlength', '200'); //to stop huge spam entries
    $(".sc-payment-btn").addClass("sono_button default");
});

$("#gift-card-button").click(function () {
    open_gift_card_form();
});


function open_gift_card_form() {
    $(".gift-card-panel").addClass("open");
}




/* Reorder panels on mobile */
$(document).ready(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".reorder-on-mobile").each(function () {
            $(this).insertBefore($(this).prev('article'));
        });
    }
});

/* Insert Invisible Subject into form */
$(document).ready(function () {
    $(".invisible-subject").val($(".invisible-subject-holder").attr('value'));
});


/* EDM Popup Js */

$(".edm-popup-close, .edm-popup").click(function () {
    close_edm_popup();
});

$(window).on("load", function () {
    setTimeout(function () {
        /*if(!cc() && $(".edm-popup").length) {
            cs();
            open_edm_popup();
        }*/
        if ($(".edm-popup").length) {
            open_edm_popup();
        }
    }, 3000);
});

function close_edm_popup() {
    $(".edm-popup").fadeOut(500);
    setTimeout(function () {
        $("body").removeClass("no-scroll");
    }, 500);
}

function open_edm_popup() {
    $(".edm-popup").fadeIn(500);
    $("body").addClass("no-scroll");
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname, cvalue) {
    console.log("check cookie");
    var val = getCookie(cname);
    if (val == cvalue) {
        //console.log("cookie true");
        return true;
    } else {
        //console.log("cookie false");
        return false;
    }
}

/*debug cookie commands */

function cd() {
    deleteCookie("popup");
}

function cs() {
    setCookie("popup", "true", 1); //expires after 1 day
}

function cc() {
    return checkCookie("popup", "true");
}

$("a").click(function (e) {
    var href = $(this).attr("href");
    if (href.indexOf('brisbane-queen-street-mall') > -1) {
        e.preventDefault();
    }
});




$('a[href^="#"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
