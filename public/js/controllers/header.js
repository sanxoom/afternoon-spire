function HeaderController($scope, $location, Global) {
    $scope.global = Global;
    $scope.menu = [
    {
        "title":"Home",
        "link":"Home"
    },
    {
        "title": "Functions",
        "link": "functions"
    },
    {
        title:"Views",
        link:"View"
    },
    {
        title:"Setups",
        link:"Setup"
    },
    {
        title:"Reports",
        link:"Report"
    },
    {
        title:"Billing",
        link:"Billing"
    },
    {
        title:"My Account",
        link:"Account"
    }
    ];

    $scope.init = function() {

    };
}