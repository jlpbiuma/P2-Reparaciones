const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const api = express();




const routes = require("./api/routes/routes.js")
console.log("Hello world!")

// http://localhost:3000/api
api.use(morgan("dev"));
api.use(cors());
api.use(express.json());
api.use("/api",routes);

api.listen("3000");

mongoose.connect(process.env.MONGO_URL,{ dbName: process.env.MONGO_DB})