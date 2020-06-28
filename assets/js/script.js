$(document).ready(function() {

    /* Cache reference to window and animation items */
    var $window = $(window);

    /* Set home section height just above fold */
    $(".home-section").css("height", $window.height() * 0.9);

    /* Float in name and resume button after loading */
    $("#home-text").removeClass("float-in-pre");
    $("#home-text").addClass("float-in-post");

    /* Blinking down arrow on project pages */
    var isTransparent = false;

    var noScrollYet = setInterval(function() {
        if (noScrollYet) {
            if (isTransparent) {
                $(".proj-summary img").css("filter","opacity(0)");
                isTransparent = false;
            } else {
                $(".proj-summary img").css("filter","opacity(0.8)");
                isTransparent = true;
            }
        }
    }, 1000);

    $window.scroll(function() {
        if ($window.scrollTop() > 0) {
            clearInterval(noScrollYet);
            $(".proj-summary img").css("filter","opacity(0.8)");
        }
    });

    /* Hide/Show Navbar options when Menu Button is clicked (only applies to window width < 1000) */
    var isShowNavbar = false;

    $("#navbar-menu-btn").click(function(event) {
        event.stopPropagation();
        if (isShowNavbar) {
            $(".navbar").hide();
            isShowNavbar = false;
            $("#navbar-menu-btn").css("filter","none");
        } else {
            $(".navbar").show();
            isShowNavbar = true;
            $("#navbar-menu-btn").css("filter","invert()");
        }
    });

    $window.click(function() {
        $(".navbar").hide();
        isShowNavbar = false;
        $("#navbar-menu-btn").css("filter","none");
    });
});
