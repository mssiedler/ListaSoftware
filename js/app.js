angular.module("appSoftware", [
            "ngRoute",
            "ui.bootstrap",
            "Restful",
            "chart.js"
        ])

        .constant("API", {
            "path": "http://localhost:8084/WSEmbrapa/embrapa/",
            "version": ""
        });

