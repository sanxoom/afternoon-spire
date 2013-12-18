/**
 * Created by Mizan on 11/1/13.
 */

function functionsController($scope, $routeParams, $location, Global, tabService, notificationService,
                             tableService, tableDataService) {

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

    tableDataService.query(function(tableData)
    {
        $scope.gridData = tableData;

        console.log('grid data');
        console.log($scope.gridData);
    });

    tableService.query(function(tables)
    {
       $scope.tables = tables;
        console.log('table data');
        console.log(tables);
    });

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

    var headerTemplate = '<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !noSortVisible }"><div ng-click="col.sort($event)" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}&nbsp;&nbsp;<span title="{{col.displayName}}">?</span></div><div class="ngSortButtonDown" ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>';
    $scope.gridOptions = {
        data: 'gridData',
        showGroupPanel: true,
        showSelectionCheckbox:true,
        enableRowSelection: false,
        columnDefs: [{ field: 'requirement', headerCellTemplate:headerTemplate, displayName: 'Requirement', width: 200, cellTemplate: '<div>{{row.entity[col.field]}}&nbsp;&nbsp;<span ng-custom-edit-cell ng-click="editCell(this)">Edit</span></div>' }]
    };
}

