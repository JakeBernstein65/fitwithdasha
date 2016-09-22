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
    interval: 8000,
  });
});

var displayPhotos = function(data){
    var imageList = data.data;
    
    for (var i = 0; i < imageList.length; i++) {
        var curImage =  document.getElementById("image" + i);
        curImage.src = imageList[i].images.standard_resolution.url;
    };
}

 var feed = new Instafeed({
    get: 'user',
    sortBy: 'most-recent',
    limit: '9',
    userId: '1725683963',
    clientId: 'dd97613a17cd402ca6ad2c67d4a95912',
    accessToken: '1725683963.1677ed0.3c55762aae97419288d415df9ca47a34',
    success: function(data){
        displayPhotos(data);
        }
    });
feed.run();
