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
})
.directive("ngCustomFixedGridHeader", function()
    {
        return function(scope, element, attrs) {
            var eTop = $(element).offset().top;
            $(window).scroll(function(e)
            {
                var elementTop = eTop - $(window).scrollTop();
                if(elementTop<=0)
                {
                    $(element).find(".ngTopPanel").addClass("top-fixed-header")
                }
                else
                {
                    $(element).find(".ngTopPanel").removeClass("top-fixed-header")
                }
            });
        };
    })
.directive("editCell", function()
    {
        return function(scope, element, attrs) {
            $(element).bind("click",function()
            {
                $(element).parents(".ngCell").css("overflow", "visible");
                $(element).parent('div').remove(".edit-cell").append("<div class='edit-cell'><input type='text'/><span onclick='closeEdit()'>close</span></div>");
                $(".edit-cell span").bind("click", closeEdit);
            });

            function closeEdit()
            {
                $(".edit-cell").remove();
            }
        };
    });