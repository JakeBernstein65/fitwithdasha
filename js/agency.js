//var Instafeed = require("js/instafeed.js");

var photos = {};

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

})(jQuery); // End of use strict

$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 400000,
  });
});

var displayPhotos = function(data){
    var imageList = data.data;
    
    for (var i = 0; i < imageList.length; i++) {
        var curImage =  document.getElementById("image" + i);
        curImage.src = imageList[i].images.standard_resolution.url;
    };
    
    // var template = document.getElementById('template');

    // $("#first").width(template.width);
    // $("#first").height(template.height);

    // console.log(template.height);
    // console.log(template.width);

    // console.log(curImage.height);
    // console.log(curImage.width);
}

 var feed = new Instafeed({
    get: 'user',
    sortBy: 'most-recent',
    limit: '9',
    userId: '195466018',
    clientId: '9c24412f934842d397b5a0e360af1d6a',
    accessToken: '195466018.1677ed0.63a32368f14c44c39d2667c9908eaad8',
    success: function(data){
        displayPhotos(data);
        }
    });
feed.run();
