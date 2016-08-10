angular.module("appSoftware", [
            "ngRoute",
            "ui.bootstrap",
            "Restful",
            "chart.js"
        ])

        .constant("API", {
            "path": "http://embrapa-software/",
            "version": ""
        });

