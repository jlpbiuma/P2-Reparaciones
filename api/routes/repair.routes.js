const express = require('express')
const api = express()

const {
    getAllRepairs,
    getRepairById,
    addNewRepair,
    updateNewRepair,
    deleteRepair    
} = require("../controller/repair.controller")

//GET: http://localhost:3000/api/repairs/
api.get("/", getAllRepairs)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", getRepairById)
//POST: http://localhost:3000/api/repairs/
api.post("/",addNewRepair)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", updateNewRepair)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", deleteRepair) 

module.exports = api;