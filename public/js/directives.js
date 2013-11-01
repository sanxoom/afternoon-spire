window.app.directive("ngTwTab", function() {
    return function(scope, element, attrs) {
        $("#functionTab .nav li :first").addClass("active");
        element.bind("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass('active');
        });
    }
});