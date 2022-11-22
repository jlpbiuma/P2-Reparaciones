const express = require('express')
const api = express()
const { checkAuth, checkRol, checkRolFirstAndIdBefore, checkRolAdmin} = require("../utils/utils.js")
const {
    getAllRepairs,
    getRepairById,
    getEnterDate,
    getPickUpDate,
    getPrice,
    getAllUnasignedRepairs,
    getAllUnasignedRepairsByClientId,
    getAllAsignedRepairs,
    getAllAsignedRepairsByUserId,
    getAllDoneRepairs,
    getAllDoneRepairsByUserId,
    addNewRepair,
    updateNewRepair,
    putEnterDate,
    putPickUpDate,
    putPrice,
    putAsignToEmployee,
    deleteRepair 
} = require("../controller/repair.controller")

//GET: http://localhost:3000/api/repairs/
api.get("/", checkAuth, checkRol, getAllRepairs)
//GET: http://localhost:3000/api/repairs/:id
api.get("/id/:id", checkAuth, checkRolFirstAndIdBefore, getRepairById)
//GET: http://localhost:3000/api/repairs/237864278462378/enterdate
api.get("/:id/enterdate", checkAuth, checkRolFirstAndIdBefore, getEnterDate)
//GET: http://localhost:3000/api/repairs/237864278462378/pickupdate
api.get("/:id/pickupdate", checkAuth, checkRolFirstAndIdBefore, getPickUpDate)
//GET: http://localhost:3000/api/repairs/237864278462378/price
api.get("/:id/price", checkAuth, checkRolFirstAndIdBefore, getPrice);
//GET: http://localhost:3000/api/repairs/unasigned
api.get("/unasigned", checkAuth, checkRol, getAllUnasignedRepairs)
//GET: http://localhost:3000/api/repairs/unasigned
api.get("/unasigned/:userId", checkAuth, getAllUnasignedRepairsByClientId)
//GET: http://localhost:3000/api/repairs/unasigned/72634762374523
api.get("/asigned", checkAuth, checkRolAdmin, getAllAsignedRepairs)
//GET: http://localhost:3000/api/repairs/asigned
api.get("/asigned/:id", checkAuth, getAllAsignedRepairsByUserId)
//GET: http://localhost:3000/api/repairs/asigned/2386742364723
api.get("/done", checkAuth, checkRolAdmin, getAllDoneRepairs)
//GET: http://localhost:3000/api/repairs/done
api.get("/done/:id", checkAuth, getAllDoneRepairsByUserId)
//POST: http://localhost:3000/api/repairs/done/2374562374523654
api.post("/", checkAuth, addNewRepair)
//PUT: http://localhost:3000/api/repairs/:id
api.put("/:id", checkAuth, checkRol, updateNewRepair)
//PUT: http://localhost:3000/api/repairs/237864278462378/enterdate
api.put("/:id/enterdate", checkAuth, checkRol, putEnterDate)
//PUT: http://localhost:3000/api/repairs/237864278462378/pickupdate
api.put("/:id/pickupdate", checkAuth, checkRol, putPickUpDate)
//PUT: http://localhost:3000/api/repairs/237864278462378/price
api.put("/:id/price", checkAuth, checkRol, putPrice)
//PUT: http://localhost:3000/api/repairs//unasigned/734576345634675
api.put("/unasigned/:id", checkAuth, checkRol, putAsignToEmployee)
//POST: http://localhost:3000/api/repairs/:id
api.delete("/:id", checkAuth, deleteRepair)

module.exports = api;