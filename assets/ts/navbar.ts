$(document).ready(function() {
    /* Cache reference to window and animation items */
    var $window = $(window);

    /* Hide/Show Navbar options when Menu Button is clicked (only applies to window width < 1000) */
    var isShowNavbar = false;

    $("#navbar-menu-btn").click(function(event) {
        event.stopPropagation();
        if (isShowNavbar) {
            $(".navbar-options").fadeOut({"easing": "linear"});
            isShowNavbar = false;
            $("#navbar-menu-btn").css("filter","none");
        } else {
            $(".navbar-options").fadeTo("default", 0.975, "linear");
            isShowNavbar = true;
            $("#navbar-menu-btn").css("filter","invert()");
        }
    });

    $window.click(function() {
        if (isShowNavbar) {
            $(".navbar-options").fadeOut({"easing": "linear"});
            isShowNavbar = false;
            $("#navbar-menu-btn").css("filter","none");
        }
    });
});
