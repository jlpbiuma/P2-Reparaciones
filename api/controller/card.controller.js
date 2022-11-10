const cardModel = require("../models/card.model");

function getAllCards (req, res)
{
    cardModel.find()
    .then((card)=> {res.json(card)})
    .catch((err) => {res.json(err)})
}

function getCardById (req, res)
{
    cardModel.findById(req.params.id)
    .then((card) => {res.json(card)})
    .catch((err) => {res.json(err)})
}

function addNewCard(req, res)
{
    cardModel.create(req.body)
    .then((card) => {res.json(card)})
    .catch((err) => {res.json(err)})
}

function updateCard(req, res)
{
    cardModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then((card) => {res.json(card)})
    .catch((err) => {res.json(err)})
}

function deleteCard(req, res)
{
    cardModel.findOneAndDelete(req.params.id)
    .then((card) => {res.json(card)})
    .catch((err) => {res.json(err)})
}

module.exports = {
    getAllCards,
    getCardById,
    addNewCard,
    updateCard,
    deleteCard}