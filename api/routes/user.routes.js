const express = require('express');
const api = express();
const { checkAuth, checkRol } = require("../utils/utils.js")
const {
    getAllUsers,
    getInfoFromClientID,
    getInfoFromAdminID, 
    addNewClient,
    addNewAdmin,
    updateClientInfo, 
    updateAdminInfo, 
    deleteClient, 
    deleteAdmin } = require("../controller/user.controller");

//GET: http://localhost:3000/api/users/
api.get("/", checkAuth, checkRol, getAllUsers); // AQUI VA UN MIDDLEWARE Y SOLO ENTRAN ADMINS
//GET: http://localhost:3000/api/users/client/73485735 <-- esto es un ID raro
api.get("/client/:id", checkAuth, checkRolFirstAndIdBefore, getInfoFromClientID) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER CON EL ID
//GET: http://localhost:3000/api/users/admin/73485735
api.get("/admin/:id", checkAuth, checkRol, getInfoFromAdminID) // AQUÍ VA MIDDLEWARE Y SOLO PASAN LOS ADMIN
//POST: http://localhost:3000/api/users/
api.post("/client/",addNewClient) // AQUI NO VA MIDDLEWARE
api.post("/admin/",addNewAdmin) // AQUI NO VA MIDDLEWARE
//PUT:http://localhost:3000/api/users/73485735
api.put("/client/:id", checkAuth, updateClientInfo) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER
api.put("/admin/:id", checkAuth, checkRol, updateAdminInfo) // AQUI VA MIDDLEWARE SOLO PASAN ADMIN
//DELETE:http://localhost:3000/api/users/73485735
api.delete("/client/:id", checkAuth, checkRolFirstAndIdBefore, deleteClient) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER
api.delete("/admin/:id", checkAuth, checkRol, deleteAdmin) // AQUI VA MIDDLEWARE SOLO PASAN ADMIN

module.exports = api;