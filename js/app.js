angular.module("appSoftware",["ngRoute","ui.bootstrap"])
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
                    .when('/inicio', {
                        templateUrl: 'view/inicial.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .when('/software/:id', {
                        templateUrl: 'view/software.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .when('/software/:empresa/:idempresa', {
                        templateUrl: 'view/software.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .when('/login', {
                        templateUrl: 'view/login.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .when('/', {
                        templateUrl: 'view/inicial.html',
                        controller: 'appSoftwareCtrl'
                    })
                    .otherwise('/');
        });

