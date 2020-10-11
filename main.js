require('dotenv').config();
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname));
app.get("/", function(req, res){
    res.render("index");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/services", function(req, res){
    res.render("services");
});
app.get("/project", function(req, res){
    res.render("project");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
const port = process.env.PORT||3000;
app.listen(port, function(){
    console.log("server running at " + port);
});