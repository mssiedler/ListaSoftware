angular.module('appSoftware')
        .service('PaginatorService', PaginatorService);

function PaginatorService() {
    
    var that = {};

    that.pages = 1;
    that.current = 1;
    that.total = 1;
    that.limit = 20;
    that.offset = 0;
    that.range = [].constructor(1);

    return {
        setData: function (data) {
            that.current = 1;
            that.total = data.length;
            that.pages = Math.ceil(data.length / that.limit);
            this.setRange();
        },
        setPage: function (page) {
            that.current = page;
        },
        getPage: function () {
            return that.current;
        },
        setRange: function () {
            var loop = [];
            if (that.pages > 6) {
                for (var i = that.current - 3; i <= that.current + 3; i++) {
                    if (i > 0 && i <= that.pages) {
                        loop.push(i);
                    }
                }
            } else {
                for (var i = 1; i <= that.pages; i++) {
                    loop.push(i);
                }
            }
            that.range = loop;
        },
        getRange: function () {
            return that.range;
        },
        goTo: function (page) {
            that.current = page;
        },
        getOffset: function () {
            var offset = (that.current - 1) * that.limit;
            return offset;
        },
        getLimit: function () {
            return that.limit;
        }
    }
}