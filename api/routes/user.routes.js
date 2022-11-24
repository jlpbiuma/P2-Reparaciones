const express = require('express');
const api = express();
const { checkAuth, checkRol, checkRolFirstAndIdBefore, checkRolAdminFirstAndIdBefore, checkRolAdmin} = require("../utils/utils.js")
const {
    getAllUsers,
    getInfoByID,
    getHistoryRepair,
    addNewUser,
    updateUserInfo,
    deleteUser } = require("../controller/user.controller");

//GET: http://localhost:3000/api/users/
api.get("/", checkAuth, checkRol, getAllUsers);
//GET: http://localhost:3000/api/users/client/73485735
api.get("/client/:id", checkAuth, getInfoByID)
//GET: http://localhost:3000/api/users/employee/2743234
api.get("/employee/:id", checkAuth, getInfoByID)
//GET: http://localhost:3000/api/users/admin/73485735
api.get("/admin/:id", checkAuth, checkRolAdmin, getInfoByID)
//GET: http://localhost:3000/api/users/admin/62347623/historyrepair
api.get("/:id/historyrepair", checkAuth, checkRolFirstAndIdBefore, getHistoryRepair)
//POST: http://localhost:3000/api/users/
api.post("/client/",addNewUser)
//POST: http://localhost:3000/api/employee/
api.post("/employee/",addNewUser)
//POST: http://localhost:3000/api/admin/
api.post("/admin/",addNewUser)
//PUT:http://localhost:3000/api/users/client/73485735
api.put("/client/:id", checkAuth, updateUserInfo)
//PUT: http://localhost:3000/api/users/employee/73485735
api.put("/employee/:id", checkAuth, checkRolAdminFirstAndIdBefore, updateUserInfo)
// PUT: http://localhost:3000/api/users/admin/73485735
api.put("/admin/:id", checkAuth, checkRolAdmin, updateUserInfo)
//DELETE:http://localhost:3000/api/users/client/7234623846
api.delete("/client/:id", checkAuth, checkRolFirstAndIdBefore, deleteUser)
//DELETE: http://localhost:3000/api/users/employee/7234623846
api.delete("/employee/:id", checkAuth, checkRolAdmin, deleteUser)
//DELETE:http://localhost:3000/api/users/admin/78234623746
api.delete("/admin/:id", checkAuth, checkRolAdmin, deleteUser)

module.exports = api;