const express = require('express')
const api = express()
const { checkAuth, checkRol } = require("../utils/utils.js")
const {
    getAllRegister,
    getRegisterById,
    addNewRegister,
    updateRegister,
    deleteRegister    
} = require("../controller/register.controller")

//GET: http://localhost:3000/api/register/
api.get("/", checkAuth, checkRol, getAllRegister)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", checkAuth, checkRol, getRegisterById)
//POST: http://localhost:3000/api/repairs/
api.post("/", checkAuth,checkRol, addNewRegister)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRol, updateRegister)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, checkRol, deleteRegister) 

module.exports = api;