const express = require('express')
const api = express()
const { checkAuth, checkRol, checkRolFirstAndIdBefore} = require("../utils/utils.js")
const {
    getAllRepairs,
    getRepairById,
    addNewRepair,
    updateNewRepair,
    deleteRepair    
} = require("../controller/repair.controller")

//GET: http://localhost:3000/api/repairs/
api.get("/", checkAuth, checkRol, getAllRepairs)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", checkAuth, checkRolFirstAndIdBefore, getRepairById)
//POST: http://localhost:3000/api/repairs/
api.post("/", checkAuth, addNewRepair)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRol, updateNewRepair)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, deleteRepair) 

module.exports = api;