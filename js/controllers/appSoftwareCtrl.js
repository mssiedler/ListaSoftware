angular.module("appSoftware")
        .controller("appSoftwareCtrl", AppSoftwareCtrl);

AppSoftwareCtrl.$inject = ['$scope', 'FactoryService', '$location', 'CategoriaService', '$routeParams'];
function AppSoftwareCtrl($scope, FactoryService, $location, CategoriaService, $routeParams) {

    $scope.titulo = "Gerenciamento de Softwares";
    $scope.empresas = [];
    $scope.empresa = {};
    $scope.softwares = [];
    $scope.software = {};
    $scope.categorias = CategoriaService.all();
    $scope.filtro = {
        categoria_id: "0"
    };
    
    if($routeParams !== undefined && $routeParams.categoria_id !== undefined) {
        $scope.filtro.categoria_id = $routeParams.categoria_id;
    }
    if($routeParams !== undefined && $routeParams.empresa_id !== undefined) {
        $scope.software.empresa_id = $routeParams.empresa_id;
    }

    $scope.mensagem = "";
    $scope.notificacaoClass = "";


    var carregarLista = function (){
        FactoryService.all('software').then(function (data){
            $scope.softwares = data.dados;
        });
    };
    

    $scope.adicionar = function (software) {
        
        var data = angular.copy(software);

        FactoryService.save('software', null, null, data).then(function (data) {
            if(data.erro === false) {
                $scope.software = {};
            $scope.formulario.$setPristine();
                carregarLista();
                $scope.mensagem = "Operação realizada com sucesso";
                $scope.notificacaoClass = "alert-success";                
            } else {
                $scope.mensagem = "Erro ao inserir software";
                $scope.notificacaoClass = "alert-error";                 
            }
        });

    };

    $scope.editData = function (obj) {
        $scope.mensagem = "";
        $scope.software = obj;
    };


    $scope.apagar = function () {
        FactoryService.delete('software', $scope.software).then(function () {
            $scope.software = {};
            $scope.formulario.$setPristine();
            carregarLista();
            $scope.mensagem = "Registro excluído com sucesso";
            $scope.notificacaoClass = "alert-success";
        });

    };

    var carregarEmpresas = function (){
        FactoryService.all('empresa').then(function (data) {
            $scope.empresas = data.dados;
        });
    };
    
    $scope.go = function (path) {
        $location.path(path);
    };
    
    $scope.isSelecionado = function () {
        return  $scope.empresa.id > 0;
    };
    
    $scope.getFiltros = function(filtro) {
        var filtros = [];
        if(filtro.categoria_id !== "0") {
            filtros['categoria_id'] = filtro.categoria_id;
        }
        if(filtro.nome !== undefined && filtro.nome !== "") {
            filtros['nome'] = filtro.nome;
        }
        console.log(filtros);
        return filtros;
    }
    
    carregarEmpresas();
    carregarLista();

}


