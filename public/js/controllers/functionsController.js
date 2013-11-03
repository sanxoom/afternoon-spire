/**
 * Created by Mizan on 11/1/13.
 */

function functionsController($scope, $routeParams, $location, Global, tabService) {

    $scope.IsAddTabButtonVisible = true;
    var showTabs =function()
    {
        tabService.query(function(tabs) {
            $scope.tabs = tabs;
            console.log($scope.tabs);
        });
    };

    showTabs();

    $scope.addTab = function()
    {
        $scope.IsAddTabButtonVisible = false;
    }

    $scope.saveTab = function()
    {
        var tab = new tabService(
        {
            name : $scope.newTabName
        });

        tab.$save(function(response) {
            $scope.tabs.push(tab);
            showTabs();
            $scope.IsAddTabButtonVisible = true;
        });
    }
}