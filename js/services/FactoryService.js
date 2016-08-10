angular.module('appSoftware')
        .service('FactoryService', FactoryService);

FactoryService.$inject = ['Restful'];
function FactoryService(Restful) {

    var _domain = '';
    var _columns = null;
    var _relations = null;
    var _prefixSearch = '';

    return {
        checkQueryString: function (url) {
            url += (url.indexOf('?') !== -1 ? '&' : '?') + 'q=';
            return url;
        },
        getUrl: function (domain, id, route, search, columns, relations, page, limit) {

            var url = '';
            url += (Boolean(search) ? _prefixSearch : '');
            url += (Boolean(domain) ? domain : '');
            url += (Boolean(id) ? ('/' + id + '/') : '');
            url += (Boolean(route) ? (!Boolean(id) ? '/' : '') + route : '');

            if (page !== undefined && page !== null && page !== false) {
                page = page || 1;
                limit = limit || 50;
                url = this.checkQueryString(url);
                url += '&_page=' + page + '&_limit=' + limit;
            }

            if (columns !== null && columns !== undefined && columns.length > 0) {
                url = this.checkQueryString(url);
                columns.forEach(function (val) {
                    if (val.length > 0) {
                        url += '&_columns[]=' + val;
                    }
                });
            }

            if (relations !== null && relations !== undefined && relations.length > 0) {
                url = this.checkQueryString(url);
                relations.forEach(function (val) {
                    if (val.length > 0) {
                        url += '&_with[]=' + val;
                    }
                });
            }

            return url;
        },
        get: function (domain, id, route, columns, relations) {
            domain = domain || _domain;
            id = id || false;
            route = route || false;
            columns = columns || _columns;
            relations = relations || _relations;
            var url = this.getUrl(domain, id, route, false, columns, relations);
            return Restful.get(url);
        },
        all: function (domain, route, columns, relations) {
            domain = domain || _domain;
            route = route || false;
            columns = columns || _columns;
            relations = relations || _relations;
            var url = this.getUrl(domain, false, route, false, columns, relations);
            return Restful.get(url);
        },
        search: function (domain, route, data, columns, relations, page, limit) {
            domain = domain || _domain;
            route = route || false;
            data = data || false;
            var url = this.getUrl(domain, false, route, true, columns, relations, page, limit);
            return Restful.post(url, data);
        },
        put: function (domain, route, data) {
            domain = domain || _domain;
            route = route || false;
            var url = this.getUrl(domain, data.id, route);
            return Restful.put(url, data);
        },
        post: function (domain, id, route, data) {
            domain = domain || _domain;
            id = id || false;
            route = route || false;
            var url = this.getUrl(domain, id, route);
            return Restful.post(url, data);
        },
        save: function (domain, id, route, data) {
            if (data.id !== undefined) {
                return this.put(domain, route, data);
            } else {
                return this.post(domain, id, route, data);
            }
        },
        delete: function (domain, data) {
            domain = domain || _domain;
            var url = this.getUrl(domain);
            return Restful.delete(url, data);
        }
    }
}