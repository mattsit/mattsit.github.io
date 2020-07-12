$(document).ready(function() {
    /* Cache reference to window and animation items */
    var $window = $(window);

    /* Hide/Show Navbar options when Menu Button is clicked (only applies to window width < 1000) */
    var isShowNavbar = false;

    $("#navbar-menu-btn").click(function(event) {
        event.stopPropagation();
        if (isShowNavbar) {
            $(".navbar-options").css("filter","opacity(0)");
            isShowNavbar = false;
            $("#navbar-menu-btn").css("filter","none");
        } else {
            $(".navbar-options").css("filter","opacity(.975)");
            isShowNavbar = true;
            $("#navbar-menu-btn").css("filter","invert()");
        }
    });

    $window.click(function() {
        if (isShowNavbar) {
            $(".navbar-options").css("filter","opacity(0)");
            isShowNavbar = false;
            $("#navbar-menu-btn").css("filter","none");
        }
    });
});
