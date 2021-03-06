let express = require("express");
let methodOverride = require("method-override");
let bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(PORT, function () {
    console.log("App is now listening at localhost:" + PORT);
});






