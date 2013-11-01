/**
 * Created by Mizan on 11/1/13.
 */
window.app.factory("tabService", function($resource) {
    return $resource('tabs/:tabId', {
        tabId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});