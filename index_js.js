$(document).ready(function() {
    $(".expand-icon").click(function() {
        $(".side-bar").toggleClass("collapse");
        $(".main-container").toggleClass("expand-container");
        if ($(".fas").hasClass("fa-arrow-right")) {
            $(".fas").addClass('fa-arrow-left').removeClass('fa-arrow-right');
            return;
        }
        if ($(".fas").hasClass("fa-arrow-left")) {
            $(".fas").addClass('fa-arrow-right').removeClass('fa-arrow-left');
        }

    });
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
        myFunction();
    };

    // Get the navbar
    var navbar = document.getElementById("nav-bar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});
