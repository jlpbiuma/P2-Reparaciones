const express = require('express')
const api = express()
const { checkAuth, checkRolAdmin } = require("../utils/utils.js")
const {
    getAllCards,
    getCardById,
    addNewCard,
    updateCard,
    deleteCard } = require("../controller/card.controller")

//GET: http://localhost:3000/api/card/
api.get("/", checkAuth, checkRolAdmin, getAllCards)
//GET: http://localhost:3000/api/card/:id
api.get("/:id", checkAuth, checkRolAdmin, getCardById)
//POST: http://localhost:3000/api/card/
api.post("/", checkAuth, checkRolAdmin, addNewCard)
//PUT: http://localhost:3000/api/card/:id
api.put("/:id", checkAuth, checkRolAdmin, updateCard)
//DELETE: http://localhost:3000/api/card/:id
api.delete("/:id", checkAuth, checkRolAdmin, deleteCard)

module.exports = api;