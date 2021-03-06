// import ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    // the variables cols and vals are arrays
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(burger_id, cb){
        orm.update("burger_id", function(res){
            cb(res);
        });
    }
};


// Export the database functions for the controller (burgers_controller.js)
module.exports = burger; 