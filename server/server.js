(function () {
    
    "use strict";

    var express = require('express'),
        app = express(),
        port = process.env.PORT || 8089;
    
    app.use(express.static(__dirname + "/../public"));
   
    app.listen(port, function () {
        console.log("start listening on port " + port + "...");
    });
    
}());