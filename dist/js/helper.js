var paginator = {
    
    range: [].constructor(1),
    
    setRange: function (pages, currentPage) {
        var loop = [];
        if (pages > 10) {
            for (var i = currentPage - 4; i <= currentPage + 4; i++) {
                if (i > 0 && i <= pages) {
                    loop.push(i);
                }
            }
            this.range = loop;
        } else {
            for (var i = 1; i <= pages; i++) {
                loop.push(i);
            }
            this.range = loop;
        }
    },
    getRange: function () {
        return this.range;
    }
};