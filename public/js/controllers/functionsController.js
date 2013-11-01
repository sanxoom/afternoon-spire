/**
 * Created by Mizan on 11/1/13.
 */

function functionsController($scope, $routeParams, $location, Global, tabService) {
    tabService.query(function(tabs) {
        $scope.tabs = tabs;
        console.log($scope.tabs);
    });

    $scope.find = function(query) {
        tabService.query(query, function(articles) {
            $scope.articles = articles;
        });
    };
}