/**
 * Created by Mizan on 11/16/13.
 */

window.app.factory("tableService", function($resource) {
    return $resource('tables/:tableId', {
        tableId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});