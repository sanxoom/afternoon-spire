/**
 * Created by Mizan on 11/16/13.
 */

window.app.factory("tabTableDataService", function($resource) {
    return $resource('tabTableData/:tableDataId', {
        tableDataId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});