const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const api = express();
const routes = require("./api/routes/routes.js")
console.log("Hello world!")

// http://localhost:3000/api
api.use(morgan("dev"));
api.use(cors());
api.use("/api",routes);

api.listen("3000");
/*
mongoose.connect("mongodb://admin:123@192.168.0.18:27017/?authMechanism=DEFAULT", () => {
    console.log("Conectado correctamente!");
})
*/
