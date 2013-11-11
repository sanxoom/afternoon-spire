window.app.directive("ngTwTab", function() {
    return function(scope, element, attrs) {
        $("#functionTab .nav li :first").addClass("active");
        element.bind("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass('active');
        });
    }
})

.directive("ngNotification", function($rootScope) {
    return function(scope, element, attrs) {
        $rootScope.$on('notification-received', function(currentScope, msg)
        {
            $(element).find(".alert").html(msg);
        });
    }
});