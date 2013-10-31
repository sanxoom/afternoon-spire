function HeaderController($scope, $location, Global) {
    $scope.global = Global;
    $scope.menu = [{
        "title": "Articles",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    },
    {
        "title":"Home",
        "link":"Home"
    },
    {
        "title": "Functions",
        "link": "articles/create"
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