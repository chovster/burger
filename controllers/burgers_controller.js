var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes when required.
router.get("/", function (req, res) {
    // we are using the burger variable (var burger = require...)
    burger.all(function (data) {
        var hbsObject = {
            // burgers are coming from the sql file
            burgers: data
        };
        console.log(hbsObject);
        // the "index" is index.handlebars
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect("/");
        });
});

router.post("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(){
        res.redirect("/");
    });
});




module.exports = router;