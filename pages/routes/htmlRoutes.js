var path = require("path");

module.exports = function(app){
    app.get("/tables", function(req,res){
        res.sendFile(path.join(__dirname, "../pages/tables.html"));
    });
    app.get("/reserve", function(req,res){
        res.sendFile(path.join(__dirname, "../pages/reservations.html"));
    });
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../pages/home.html"));
    });
};