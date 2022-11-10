const registerModel = require("../models/register.model");

function getAllRegisters (req, res)
{
    registerModel.find()
        .then((registers)=> {res.json(registers)})
        .catch((err) => {res.json(err)})
}

function getRegisterById (req, res)
{
    registerModel.findById(req.params.id)
        .then((register) => {res.json(register)})
        .catch((err) => {res.json(err)})
}

function addNewRegister(req, res)
{
    registerModel.create(req.body)
        .then((register) => {res.json(register)})
        .catch((err) => {res.json(err)})
}

function updateRegister(req, res)
{
    registerModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then((register) => {res.json(register)})
    .catch((err) => {res.json(err)})
}

function deleteRegister(req, res)
{
    registerModel.findOneAndDelete(req.params.id)
    .then((register) => {res.json(register)})
    .catch((err) => {res.json(err)})
}

module.exports = {
    getAllRegisters,
    getRegisterById,
    addNewRegister,
    updateRegister,
    deleteRegister
}