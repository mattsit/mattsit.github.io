$(document).ready(function() {
    var $cards = $('.proj-container').imagesLoaded( function() {
      // init Masonry after all images have loaded
      $cards.masonry({
          itemSelector: '.proj-card',
          gutter: '.proj-card-gutter',
          horizontalOrder: true
      });
    });
});
