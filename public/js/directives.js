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
        $rootScope.$on('notification-information-received', function(currentScope, msg)
        {
            element.append('<div class="alert alert-info">' + msg + '<button type="button" class="close" data-dismiss="alert">×</button></div>');
        });

        $rootScope.$on('notification-error-received', function(currentScope, msg)
        {
            element.append('<div class="alert alert-error">' + msg + '<button type="button" class="close" data-dismiss="alert">×</button></div>');
        });
    }
});