/**
 * Created by Mizan on 11/16/13.
 */

window.app.factory("tableDataService", function($resource) {
    return $resource('tableData/:tableDataId', {
        tableDataId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});