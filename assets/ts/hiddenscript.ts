$(document).ready(function() {

    /* Intially hide all lab content divs. */
    var allDivs = document.querySelectorAll('.proj-content-container');
    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = 'none';
    }
    $(".proj-content-container").hide();

    /* Set hand cursor for when hovering over any link. */
    var allLinks = document.getElementsByClassName("proj-summary-detail");
    for (var i = 0; i < allLinks.length; i++) {
        allLinks[i].style.cursor = "pointer";
    }

    /* Clicking any link hides all lab content divs, then shows its corresponding content. */
    $(".proj-summary-detail").click(function(event) {
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].style.display = 'none';
        }
        $(".proj-content-container").hide();

        var labOrDisNumber = $(event.target).text().trim().substring(0,6).replace(" ","");
        if($("#" + labOrDisNumber).length != 0) {
            $("#" + labOrDisNumber).show();
        } else {
            // Legacy.
            var labNumber = $(event.target).text().trim().substring(4,6);
            $("#" + labNumber).show();
        }
    });

});
