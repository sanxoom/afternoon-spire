/**
 * Created by Mizan on 11/1/13.
 */

function functionsController($scope, $routeParams, $location, Global, tabService) {

    $scope.IsAddTabButtonVisible = true;
    $scope.userTabs = [];
    $scope.menuTabs = [];

    var showTabs =function()
    {
        tabService.query(function(tabs) {
            $scope.tabs = tabs;
            $scope.userTabs = _.where(tabs, {user : "*"});
            $scope.menuTabs = _.where(tabs, {optional : true});

           // angular.forEach($scope.menuTabs, function(menuTab, key)
           // {
             //   menuTab.isSelected = true;
           // });
        });
    };

    showTabs();

    $scope.addTab = function()
    {
        $scope.IsAddTabButtonVisible = false;
    }

    $scope.dropdownOk = function()
    {
        angular.forEach($scope.menuTabs, function(menuTab, key)
        {
            if(menuTab.isSelected)
            {
                var tabs = _.where($scope.userTabs, {name : menuTab.name});
                if(tabs.length<=0)
                {
                    $scope.userTabs.push(menuTab);
                }
            }
            else
            {
               $scope.userTabs = _.without($scope.userTabs, _.findWhere($scope.userTabs, {name: menuTab.name}));
            }
        });

        $('[data-toggle="dropdown"]').parent().removeClass('open');
    };

    $scope.dropdownCancel = function()
    {
        $('[data-toggle="dropdown"]').parent().removeClass('open');
    };

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