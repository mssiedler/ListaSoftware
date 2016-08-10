angular.module("appSoftware")
        .controller("appMasterCtrl", AppMasterCtrl);

AppMasterCtrl.$inject = ['$scope', 'FactoryService', '$filter', 'CategoriaService'];
function AppMasterCtrl($scope, FactoryService, $filter, CategoriaService) {

    $scope.titulo = "Gerenciamento de Softwares";
    $scope.categorias = CategoriaService.all();
    $scope.labels = [];
    $scope.data = [];
    $scope.options = {legend: {display: true}};

    FactoryService.all('relatorio').then(function (data) {
        for (var key in data.dados) {
            $scope.labels.push(($filter('categoriaNome')(key) + ' (' + data.dados[key].length + ')'));
            $scope.data.push(data.dados[key].length);
        }
    });


}


