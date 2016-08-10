/**
 * Restful Module/Service
 *
 * @author Diego Mengarda <diegormengarda@gmail.com>
 */
angular.module('Restful', [])
        .service('Restful', Restful);

Restful.$inject = ['$http', 'API', '$q'];
function Restful($http, API, $q) {

    return {
        getPath: function (mod) {
            var module = mod ? mod : '';
            return API.path + API.version + module;
        },
        getHeaders: function () {
            return {
                'headers': {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                }
            };
        },
        /**
         * Pega um ou mais itens
         *
         * @param  {string} path
         * @param  {function} success
         * @param  {function} error
         * @param  {object} headers
         *
         * @return promise
         */
        get: function (path) {
            var deferred = $q.defer();
            $http.get(this.getPath(path), this.getHeaders()).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        },
        /**
         * Adiciona um novo item
         *
         * @param  {string} path
         * @param  {object} data
         * @param  {function} timeout
         *
         * @return promise
         */
        post: function (path, data, timeout) {
            var deferred = $q.defer();
            if (timeout) {
                config.timeout = timeout;
            }
            $http.post(this.getPath(path), data, this.getHeaders()).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        },
        /**
         * Altera um item
         *
         * @param  {string} path
         * @param  {object} data
         *
         * @return promise
         */
        put: function (path, data) {
            var deferred = $q.defer();
            $http.put(this.getPath(path), data, this.getHeaders()).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        },
        /**
         * Apaga um item
         *
         * @param  {string} path
         * @param  {object} data
         * @param  {string} name
         *
         * @return promise
         */
        delete: function (path, data, name) {
            var deferred = $q.defer();
            name = name || '';
            path = this.getPath(path) + '/' + data.id;
            var confirmed = confirm('Continuar na exclusão do item?');
            if (confirmed) {
                $http.delete(path, this.getHeaders()).then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response);
                });
            }
            return deferred.promise;
        }
    }
}
