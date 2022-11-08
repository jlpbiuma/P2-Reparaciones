const express = require("express");
const api = express();

const {
    signup,
    login } = require("../controller/auth.controller");

api.post("/signup/", signup);
api.post("/login/", login);

module.exports = api;