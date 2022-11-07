const express = require('express');
const api = express();
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
api.get("/",getAllUsers); // AQUI VA UN MIDDLEWARE Y SOLO ENTRAN ADMINS
//GET: http://localhost:3000/api/users/client/73485735 <-- esto es un ID raro
api.get("/client/:id",getInfoFromClientID) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER CON EL ID
//GET: http://localhost:3000/api/users/admin/73485735
api.get("/admin/:id",getInfoFromAdminID) // AQUÍ VA MIDDLEWARE Y SOLO PASAN LOS ADMIN
//POST: http://localhost:3000/api/users/
api.post("/client/",addNewClient) // AQUI NO VA MIDDLEWARE
api.post("/admin/",addNewAdmin) // AQUI NO VA MIDDLEWARE
//PUT:http://localhost:3000/api/users/73485735
api.put("/client/:id",updateClientInfo) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER
api.put("/admin/:id",updateAdminInfo) // AQUI VA MIDDLEWARE SOLO PASAN ADMIN
//DELETE:http://localhost:3000/api/users/73485735
api.delete("/client/:id",deleteClient) // AQUI VA MIDDLEWARE Y SOLO ENTRAN ADMINS O DICHO USER
api.delete("/admin/:id",deleteAdmin) // AQUI VA MIDDLEWARE SOLO PASAN ADMIN

module.exports = api;