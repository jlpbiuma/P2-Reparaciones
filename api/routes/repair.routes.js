const express = require('express')
const api = express()
const { checkAuth, checkRol, checkRolFirstAndIdBefore} = require("../utils/utils.js")
const {
    getAllRepairs,
    getRepairById,
    getEnterDate,
    getPickUpDate,
    getPrice,
    addNewRepair,
    updateNewRepair,
    putEnterDate,
    putPickUpDate,
    putPrice,
    deleteRepair    
} = require("../controller/repair.controller")

//GET: http://localhost:3000/api/repairs/
api.get("/", checkAuth, checkRol, getAllRepairs)
//GET: http://localhost:3000/api/repairs/:id
api.get("/:id", checkAuth, checkRolFirstAndIdBefore, getRepairById)
//GET: http://localhost:3000/api/repairs/237864278462378/enterdate
api.get("/:id/enterdate", checkAuth, checkRolFirstAndIdBefore, getEnterDate)
//GET: http://localhost:3000/api/repairs/237864278462378/pickupdate
api.get("/:id/pickupdate", checkAuth, checkRolFirstAndIdBefore, getPickUpDate)
//GET: http://localhost:3000/api/repairs/237864278462378/price
api.get("/:id/price", checkAuth, checkRolFirstAndIdBefore, getPrice);
//POST: http://localhost:3000/api/repairs/
api.post("/", checkAuth, addNewRepair)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRol, updateNewRepair)
//PUT: http://localhost:3000/api/repairs/237864278462378/enterdate
api.put("/:id/enterdate", checkAuth, checkRol, putEnterDate)
//PUT: http://localhost:3000/api/repairs/237864278462378/pickupdate
api.put("/:id/pickupdate", checkAuth, checkRol, putPickUpDate)
//PUT: http://localhost:3000/api/repairs/237864278462378/price
api.put("/:id/price", checkAuth, checkRol, putPrice)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, deleteRepair)

module.exports = api;