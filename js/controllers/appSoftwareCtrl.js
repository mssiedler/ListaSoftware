angular.module("appSoftware").controller("appSoftwareCtrl",
        function($scope, $http, API, $routeParams)
        {
            $scope.titulo = "Sistemas de Softwares Agropecuários";

            $scope.empresas = [];

            $scope.empresa = {};
            
            $scope.softwares = [];
            
            $scope.software = {};
            
            
            
            $scope.mensagem="";
            $scope.notificacaoClass = "";
            
            
           
            var carregarLista = function()
            {
                API.listSoftware().success(function(data)
                {
                    $scope.softwares = data;
                    
                }).error(function(data, status) {
                    $scope.mensagem = "Aconteceu um problema: " + data;
                    $scope.notificacaoClass = "alert-danger";
            });

            };

            $scope.adicionar = function(software) {
                software.verificacao = new Date();
                
                API.saveSoftware(software).success(function(data)
                {
                    $scope.software = {};
                    $scope.formulario.$setPristine();
                    carregarLista();
                    $scope.mensagem = "Operação realizada com sucesso";
                    $scope.notificacaoClass = "alert-success";
                }).error(function(data, status) {
                    $scope.mensagem = "Aconteceu um problema: " + data;
                    $scope.notificacaoClass = "alert-danger";
                });

            };

            $scope.editData = function(rowId) {
              
                $scope.mensagem ="";
                $scope.software = angular.copy($scope.softwares[rowId]);
                $scope.selectedOption = $scope.software.empresa;
            };
            
            
            $scope.apagar = function() {
                API.deleteSoftware($scope.software.id).success(function(data)
                {
                    $scope.software = {};
                    $scope.formulario.$setPristine();
                    carregarLista();
                    $scope.mensagem = "Registro adicionado com sucesso";
                    $scope.notificacaoClass = "alert-success";
                }).error(function(data, status) {
                    $scope.mensagem = "Aconteceu um problema: " + data;
                    $scope.notificacaoClass = "alert-danger";
                });

            };
            
            var carregarEmpresas = function()
            {
                API.listEmpresa().success(function(data)
                {
                    $scope.empresas = data;
                    //verifica se veio empresa por GET
                    if($routeParams.id !== null)
                    {
                        for (i = 0; i < $scope.empresas.length; i++) {
                            if($scope.empresas[i].id ==$routeParams.id)
                            {
                                $scope.software.empresa = $scope.empresas[i];
                                break;
                            }
                        }
                        
                    }
                    
                }).error(function(data, status) {
                    $scope.mensagem = "Aconteceu um problema: " + data;
                    $scope.notificacaoClass = "alert-danger";
            });

            };
            $scope.go = function(path) {
                $location.path(path);
            };
            $scope.isSelecionado = function() {
                return  $scope.empresa.id>0;
            };
            
            carregarLista();
            carregarEmpresas();
             

        });


