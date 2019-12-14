let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require("./pages/routes/apiRoutes")(app);
require("./pages/routes/htmlRoutes")(app);

// These will be the routes.
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "routes/home.html"));
// });

// app.get("/reserve", function(req, res) {
//     res.sendFile(path.join(__dirname, "routes/reservations.html"));
// });

// app.get("/tables", function(req, res) {
//     res.sendFile(path.join(__dirname, "routes/tables.html"));
// });

app.use(function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.write("You posted: \n")
    res.end(JSON.stringify(req.body, null, 2))
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});