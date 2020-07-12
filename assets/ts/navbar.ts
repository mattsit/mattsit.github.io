let isShowNavbar: boolean = false;

$(document).ready(function() {
    /* Cache reference to window and animation items */
    let $window = $(window);

    $("#navbar-menu-btn").click(function(event) {
        event.stopPropagation();
        if (isShowNavbar) {
            collapse();
        } else {
            expand();
        }
    });

    $window.click(function() {
        if (isShowNavbar) {
            collapse();
        }
    });

});

function collapse() {
    $(".navbar-options").fadeOut({"easing": "linear"});
    $("#navbar-menu-btn").css("filter","none");
    isShowNavbar = false;
}

function expand() {
    $(".navbar-options").fadeTo("default", 0.975, "linear");
    $("#navbar-menu-btn").css("filter","invert()");
    isShowNavbar = true;
}
