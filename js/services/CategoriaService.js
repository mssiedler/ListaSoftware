angular.module('appSoftware')
        .service('CategoriaService', CategoriaService);

function CategoriaService() {

    var categorias = [
        {
            id: "0",
            nome: 'Todas',
            image: 'world.png'
        },
        {
            id: "1",
            nome: 'Administração Gerenciamento Rural',
            image: 'suitcase.png'
        },
        {
            id: "2",
            nome: 'Agricultura',
            image: 'tree.png'
        },
        {
            id: "3",
            nome: 'Avicultura',
            image: 'chicken.png'
        },
        {
            id: "4",
            nome: 'Defensivos Agrícolas',
            image: 'toxic.png'
        },
        {
            id: "5",
            nome: 'Irrigação',
            image: 'drops.png'
        },
        {
            id: "6",
            nome: 'Nutrição Animal',
            image: 'grass.jpg'
        },
        {
            id: "7",
            nome: 'Ovinos',
            image: 'sheep.png'
        },
        {
            id: "8",
            nome: 'Pecuária de Corte',
            image: 'cow.png'
        },
        {
            id: "9",
            nome: 'Pecuária de Corte e Leite',
            image: 'meat.png'
        },
        {
            id: "10",
            nome: 'Pecuária de Leite',
            image: 'milk-bottle.jpg'
        },
        {
            id: "11",
            nome: 'Piscicultura',
            image: 'fish.png'
        },
        {
            id: "12",
            nome: 'Rastreabilidade',
            image: 'gps.png'
        },
        {
            id: "13",
            nome: 'Suinocultura',
            image: 'pig.png'
        },
        {
            id: "14",
            nome: 'Veterinário',
            image: 'injection.png'
        }
    ];

    return {
        all: function () {
            return categorias;
        },
        getNameById: function (id) {
            var nome;
            categorias.forEach(function(val) {
                if(val['id'] == id) {
                    nome = val['nome'];
                }
            });
            return nome;
        }
    }
}