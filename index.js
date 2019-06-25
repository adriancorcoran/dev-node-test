const express = require("express");
let app = express();
app.get("/", (req, res) => res.send("Hi there again :)"));
app.get("/services/ping", (req, res) => res.send("OK"));
app.listen("8000", () => console.log(`App started.`));
