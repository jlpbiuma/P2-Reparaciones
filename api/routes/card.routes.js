const express = require('express')
const api = express()
<<<<<<< HEAD
const { checkAuth, checkRolAdmin } = require("../utils/utils.js")
=======
const { checkAuth, checkRol } = require("../utils/utils.js")
>>>>>>> rpi
const {
    getAllCards,
    getCardById,
    addNewCard,
    updateCard,
    deleteCard } = require("../controller/card.controller")

//GET: http://localhost:3000/api/card/
<<<<<<< HEAD
api.get("/", checkAuth, checkRolAdmin, getAllCards)
//GET: http://localhost:3000/api/card/:id
api.get("/:id", checkAuth, checkRolAdmin, getCardById)
//POST: http://localhost:3000/api/card/
api.post("/", checkAuth, checkRolAdmin, addNewCard)
//PUT: http://localhost:3000/api/card/:id
api.put("/:id", checkAuth, checkRolAdmin, updateCard)
//DELETE: http://localhost:3000/api/card/:id
api.delete("/:id", checkAuth, checkRolAdmin, deleteCard)
=======
api.get("/", checkAuth, checkRol, getAllCards)
//GET: http://localhost:3000/api/card/:id
api.get("/:id", checkAuth, checkRol, getCardById)
//POST: http://localhost:3000/api/card/
api.post("/", checkAuth, checkRol, addNewCard)
//PUT: http://localhost:3000/api/card/:id
api.put("/:id", checkAuth, checkRol, updateCard)
//DELETE: http://localhost:3000/api/card/:id
api.delete("/:id", checkAuth, checkRol, deleteCard)
>>>>>>> rpi

module.exports = api;