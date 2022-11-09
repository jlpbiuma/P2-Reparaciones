const express = require('express')
const api = express()
const { checkAuth, checkRol } = require("../utils/utils.js")
const {
    getAllCards,
    getCardById,
    addNewCard,
    updateCard,
    deleteCard } = require("../controller/card.controller")

//GET: http://localhost:3000/api/card/
api.get("/", checkAuth, checkRol, getAllCards)
//GET: http://localhost:3000/api/card/:id
api.get("/:id", checkAuth, checkRol, getCardById)
//POST: http://localhost:3000/api/card/
api.post("/", checkAuth, checkRol, addNewCard)
//PUT: http://localhost:3000/api/card/:id
api.put("/:id", checkAuth, checkRol, updateCard)
//DELETE: http://localhost:3000/api/card/:id
api.delete("/:id", checkAuth, checkRol, deleteCard)

module.exports = api;