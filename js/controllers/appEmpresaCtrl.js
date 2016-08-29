angular.module("appSoftware")
        .controller("appEmpresaCtrl", AppEmpresaCtrl);

AppEmpresaCtrl.$inject = ['$scope', 'FactoryService', '$location', 'PaginatorService'];
function AppEmpresaCtrl($scope, FactoryService, $location, PaginatorService) {

    $scope.titulo = "Gerenciamento de Empresas";
    $scope.empresas = [];
    $scope.empresa = {};
    $scope.mensagem = "";
    $scope.notificacaoClass = "";

    $scope.filteredTodos = [];
    
    $scope.paginador = PaginatorService;

    var carregarLista = function () {
        FactoryService.all('empresa').then(function (data) {
            $scope.paginador.setData(data);
            $scope.empresas = data;
        });
    };

    $scope.isSelecionado = function () {
        return  $scope.empresa.id > 0;
    };

    $scope.go = function (path) {
        $location.path(path);
    };

    carregarLista();

    $scope.adicionar = function (empresa) {
        var data = angular.copy(empresa);
        FactoryService.save('empresa', null, null, data).then(function (data) {
            console.log(typeof data);
            if (data !== false) {
                $scope.empresa = {};
                carregarLista();
                $scope.mensagem = "Operação realizada com sucesso";
                $scope.notificacaoClass = "alert-success";
            } else {
                $scope.mensagem = "Erro ao inserir emprresa";
                $scope.notificacaoClass = "alert-error";
            }
        });

    };

    $scope.editData = function (emp) {

        $scope.mensagem = "";
        $scope.empresa = emp;
        document.getElementById("nome").focus();

    };

    $scope.apagar = function () {
        FactoryService.delete('empresa', $scope.empresa).then(function () {
            $scope.empresa = {};
            $scope.formulario.$setPristine();
            carregarLista();
            $scope.mensagem = "Registro excluído com sucesso";
            $scope.notificacaoClass = "alert-success";
        });

    };



}


