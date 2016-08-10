angular.module('appSoftware')
        .filter('categoriaNome', function (CategoriaService) {
            return function (input) {
                if (input !== undefined) {
                    var out = input || false;
                    if (out !== false) {
                        var categoria = CategoriaService.all().filter(function (val) {
                            return val.id == out;
                        });
                        if (categoria.length > 0) {
                            out = categoria[0].nome;
                        }
                    }
                    return out;
                }
            };
        });