angular.module("appSoftware").controller("appEmpresaCtrl",
        function($scope, $http, API, $location)
        {
            $scope.titulo = "Sistemas de Softwares Agropecuários";

            $scope.empresas = [];

            $scope.empresa = {};
            $scope.mensagem = "";
            $scope.notificacaoClass = "";

            $scope.filteredTodos = [];

  $scope.currentPage = 1;
  $scope.numPerPage = 10;
  $scope.maxSize = 5;

  

  
  
  


            

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

            $scope.editData = function(emp) {

                $scope.mensagem = "";
                $scope.empresa = emp;

            };


            $scope.apagar = function() {
                API.deleteEmpresa($scope.empresa.id).success(function(data)
                {
                    $scope.empresa = {};
                    $scope.formulario.$setPristine();
                    carregarLista();
                    $scope.mensagem = "Registro excluído com sucesso";
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

function updateFilteredItems() {
    
    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;

    $scope.filteredTodos = $scope.empresas.slice(begin, end);
  };
  
  


        });


