angular.module("appSoftware")
        .controller("appMasterCtrl", AppMasterCtrl);

AppMasterCtrl.$inject = ['$scope', 'FactoryService', '$filter', 'CategoriaService'];
function AppMasterCtrl($scope, FactoryService, $filter, CategoriaService) {

    $scope.titulo = "Gerenciamento de Softwares";
    $scope.categorias = CategoriaService.all();
    $scope.labels = [];
    $scope.data = [];
    $scope.options = {legend: {display: true}};

    FactoryService.all('software').then(function (data) {
        var relatorio = [];
        data.forEach(function (val) {
            if (val !== undefined) {
                if (relatorio[val.categoria_id] === undefined) {
                    relatorio[val.categoria_id] = [];
                }
                relatorio[val.categoria_id].push(val);
            }
        });
        relatorio.forEach(function (val, i) {
            $scope.labels.push(CategoriaService.getNameById(i));
            $scope.data.push(val.length);
        });
    });


}


