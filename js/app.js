angular.module("appSoftware",["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
    
                    .when('/empresa', {
                        templateUrl: 'view/empresa.html',
                        controller: 'appEmpresaCtrl'
                    })
                    .when('/software', {
                        templateUrl: 'view/software.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .when('/software/:id', {
                        templateUrl: 'view/software.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .when('/', {
                        templateUrl: 'view/inicial.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .otherwise('/');
        });

