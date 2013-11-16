/**
 * Created by Mizan on 11/16/13.
 */

window.app.factory("tabTableService", function($resource) {
    return $resource('tabTables/:tabTableId', {
        tabId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});