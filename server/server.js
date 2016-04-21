(function () {
    
    "use strict";

    var express = require('express'),
        app = express(),
        port = process.env.PORT || 8089;
    
    app.get('/', function (req, res) {
        res.send('Buna ziua lume!');
    });
   
    app.listen(port, function () {
        console.log("start listening on port " + port + "...");
    });
    
}());