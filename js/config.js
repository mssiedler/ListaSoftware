angular.module("appSoftware")
        .config(['$httpProvider', '$routeProvider',
            function ($httpProvider, $routeProvider) {

                $httpProvider.defaults.headers.post["Content-Type"] = "application/json";

                $routeProvider

                        .when('/empresa', {
                            templateUrl: 'view/empresa.html',
                            controller: 'appEmpresaCtrl'
                        })
                        .when('/software', {
                            templateUrl: 'view/software.html',
                            controller: 'appSoftwareCtrl'
                        })
                        .when('/software/categoria/:categoria_id', {
                            templateUrl: 'view/software.html',
                            controller: 'appSoftwareCtrl'
                        })
                        .when('/software/empresa/:empresa_id', {
                            templateUrl: 'view/software.html',
                            controller: 'appSoftwareCtrl'
                        })
                        
                        /*
                        .when('/empresa/:id', {
                            templateUrl: 'view/empresa.html',
                            controller: 'appEmpresaCtrl'
                        })
                        .when('/software/:id', {
                            templateUrl: 'view/software.html',
                            controller: 'appSoftwareCtrl'
                        })
                        .when('/software/:empresa/:idempresa', {
                            templateUrl: 'view/software.html',
                            controller: 'appSoftwareCtrl'
                        })
                        */
                        .when('/login', {
                            templateUrl: 'view/login.html',
                            controller: 'appSoftwareCtrl'
                        })
                        .when('/', {
                            templateUrl: 'view/inicial.html',
                            controller: 'appMasterCtrl'
                        })
                        .otherwise('/');
            }]);

