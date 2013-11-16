/**
 * Created by Mizan on 11/1/13.
 */

function functionsController($scope, $routeParams, $location, Global, tabService, notificationService) {

    $scope.IsAddTabButtonVisible = true;
    $scope.userTabs = [];
    $scope.menuTabs = [];

    var showTabs =function()
    {
        tabService.query(function(tabs) {
            $scope.tabs = tabs;
            $scope.userTabs = _.where(tabs, {user : "*"});
            $scope.menuTabs = _.where(tabs, {optional : true});
        });
    };

    showTabs();

    $scope.showInformation =  function()
    {
        notificationService.information('this is information');
    }

    $scope.showInError = function()
    {
        notificationService.error('this is information');
    }

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


    //Grid
    $scope.myData = [{name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},{name: "Jacob", age: 27},
        {name: "Nephi", age: 29},{name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},{name: "Jacob", age: 27},
        {name: "Nephi", age: 29},



        {name: "Enos", age: 34}];
    $scope.gridOptions = {
        data: 'myData',
        showGroupPanel: true
    };

}