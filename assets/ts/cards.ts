var jQueryBridget = require('jquery-bridget/jquery-bridget');
var ImagesLoaded = require('imagesloaded');
var Masonry = require('masonry-layout');
// Enable as jQuery plugins.
jQueryBridget( 'masonry', Masonry, $ );
jQueryBridget( 'imagesLoaded', ImagesLoaded, $ );

// Type declaration for imagesLoaded.
interface JQuery {
    imagesLoaded: (callback) => any;
    callback: () => void;
}

$(document).ready(function() {
    var $cards = $('.proj-container').imagesLoaded(function() {
        // init Masonry after all images have loaded
        $cards.masonry({
          itemSelector: '.proj-card',
          gutter: '.proj-card-gutter',
          horizontalOrder: true
        });
    });
});
