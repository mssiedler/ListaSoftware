angular.module("appSoftware").controller("appEmpresaCtrl",
        function($scope, $http, API,  $location)
        {
            $scope.titulo = "Sistemas de Softwares Agropecuários";

            $scope.empresas = [];

            $scope.empresa = {};
            $scope.mensagem = "";
            $scope.notificacaoClass = "";

            var carregarLista = function()
            {
                API.listEmpresa().success(function(data)
                {
                    $scope.empresas = data;
                    console.log($scope.empresas);
                }).error(function(data, status) {
                    $scope.mensagem = "Aconteceu um problema: " + data;
                    $scope.notificacaoClass = "alert-danger";
                });

            };

            $scope.adicionar = function(empresa) {
                API.saveEmpresa(empresa).success(function(data)
                {
                    $scope.empresa = {};
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

                $scope.mensagem = "";
                $scope.empresa = angular.copy($scope.empresas[rowId]);

            };


            $scope.apagar = function() {
                API.deleteEmpresa($scope.empresa.id).success(function(data)
                {
                    $scope.empresa = {};
                    $scope.formulario.$setPristine();
                    carregarLista();
                    $scope.mensagem = "Registro adicionado com sucesso";
                    $scope.notificacaoClass = "alert-success";
                }).error(function(data, status) {
                    $scope.mensagem = "Aconteceu um problema: " + data;
                    $scope.notificacaoClass = "alert-danger";
                });

            };
            $scope.isSelecionado = function() {
                return  $scope.empresa.id > 0;
            };

            $scope.go = function(path) {
                $location.path(path);
            };

            carregarLista();



        });


