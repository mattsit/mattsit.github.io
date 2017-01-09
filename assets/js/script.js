$(document).ready(function() {

    function afterload(){
        $("#name").removeClass("float-in-pre");
        $("#name").addClass("float-in-post");

        $("#btn-resume").removeClass("float-in-pre");
        $("#btn-resume").addClass("float-in-post");
    }

    setTimeout(afterload, 1000);

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

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            clearInterval(noScrollYet);
            $(".proj-summary img").css("filter","opacity(0.8)");
        }
    });

    /* Hide/Show Navbar on Scroll Down/Up */
    var scroll = 0;

    $(window).scroll(function() {
        if (window.innerWidth >= 1000) {
            if ($(window).scrollTop() > scroll) {
                $(".navbar").hide();
            } else {
                $(".navbar").show();
            }
            scroll = $(window).scrollTop();
        }
    });

    /* Hide/Show Navbar options when Menu Button is clicked (only applies to window width < 1000) */
    var isShowNavbar = false;

    $("#navbar-menu-btn").click(function(event) {
        event.stopPropagation();
        if (isShowNavbar) {
            $(".navbar").hide();
            isShowNavbar = false;
        } else {
            $(".navbar").show();
            isShowNavbar = true;
        }
    });

    $(window).click(function() {
        $(".navbar").hide();
        isShowNavbar = false;
    });
});
