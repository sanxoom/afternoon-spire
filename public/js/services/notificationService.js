/**
 * Created by User on 11/11/13.
 */
/**
 * Created by Mizan on 11/1/13.
 */
window.app.factory("notificationService", function($rootScope) {
    return  {
        information : function(msg)
            {
                $rootScope.$broadcast('notification-information-received', msg);
            },
        error:function(msg)
        {
            $rootScope.$broadcast('notification-error-received', msg);
        }
    };
});

