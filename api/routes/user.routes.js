const express = require('express');
const api = express();
const {getAllUsers, getInfoFromUserID, addNewUser, updateUserInfo, deleteUser} = require("../controller/user.controller");

//GET: http://localhost:3000/api/users/
api.get("/",getAllUsers); // AQUI VA UN MIDDLEWARE Y SOLO ENTRAN ADMINS
//GET: http://localhost:3000/api/users/73485735 <-- esto es un ID raro
api.get("/:id",getInfoFromUserID) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER
//POST: http://localhost:3000/api/users/
api.post("/",addNewUser) // AQUI NO VA MIDDLEWARE
//PUT:http://localhost:3000/api/users/73485735
api.put("/:id",updateUserInfo) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER
//DELETE:http://localhost:3000/api/users/73485735
api.delete("/:id",deleteUser) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER

module.exports = api;