const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "frontend")));


app.use((err, req, res, next) => {
    // console.log('error:::,', err);

    res.status(400).send(err.message)
});
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

module.exports = app;