const express = require('express')
const api = express()
const { checkAuth, checkRolAdmin } = require("../utils/utils.js")
const {
    getAllRegisters,
    getRegisterById,
    addNewRegister,
    updateRegister,
    deleteRegister    
} = require("../controller/register.controller")

//GET: http://localhost:3000/api/register/
api.get("/", checkAuth, checkRolAdmin, getAllRegisters)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", checkAuth, checkRolAdmin, getRegisterById)
//POST: http://localhost:3000/api/repairs/
api.post("/", checkAuth,checkRolAdmin, addNewRegister)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRolAdmin, updateRegister)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, checkRolAdmin, deleteRegister) 

module.exports = api;