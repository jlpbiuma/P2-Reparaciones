const express = require('express')
const api = express()
<<<<<<< HEAD
const { checkAuth, checkRolAdmin } = require("../utils/utils.js")
const {
    getAllRegisters,
=======
const { checkAuth, checkRol } = require("../utils/utils.js")
const {
    getAllRegister,
>>>>>>> rpi
    getRegisterById,
    addNewRegister,
    updateRegister,
    deleteRegister    
} = require("../controller/register.controller")

//GET: http://localhost:3000/api/register/
<<<<<<< HEAD
api.get("/", checkAuth, checkRolAdmin, getAllRegisters)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", checkAuth, checkRolAdmin, getRegisterById)
//POST: http://localhost:3000/api/repairs/
api.post("/", checkAuth,checkRolAdmin, addNewRegister)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRolAdmin, updateRegister)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, checkRolAdmin, deleteRegister) 
=======
api.get("/", checkAuth, checkRol, getAllRegister)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", checkAuth, checkRol, getRegisterById)
//POST: http://localhost:3000/api/repairs/
api.post("/", checkAuth,checkRol, addNewRegister)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRol, updateRegister)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, checkRol, deleteRegister) 
>>>>>>> rpi

module.exports = api;