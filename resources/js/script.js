$(document).ready(function() {
    
    $('.js-section-features').waypoints(function)(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }
    
    /* var waypoint = new Waypoint({
        element: document.getElementById('direction-waypoint'),
        handler: function(direction) {
          notify('Direction: ' + direction)
        }
      }) */

});