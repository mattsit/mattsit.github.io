$(document).ready(function() {
    /* Cache reference to window and animation items */
    var $window = $(window);

    /* Hide/Show Navbar options when Menu Button is clicked (only applies to window width < 1000) */
    var isShowNavbar = false;

    $(".navbar").click(function(event) {
        event.stopPropagation();
        if (isShowNavbar) {
            $(".navbar-options").hide();
            isShowNavbar = false;
            $("#navbar-menu-btn").css("filter","none");
        } else {
            $(".navbar-options").show();
            isShowNavbar = true;
            $("#navbar-menu-btn").css("filter","invert()");
        }
    });

    $window.click(function() {
        $(".navbar-options").hide();
        isShowNavbar = false;
        $("#navbar-menu-btn").css("filter","none");
    });
});
