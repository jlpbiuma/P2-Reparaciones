const userModel = require("../models/user.model");
const repairModel = require("../models/repair.model");

function getAllUsers(req, res)
{
    userModel.find()
    .then((users) => {res.json(users)})
    .catch((err) => res.json(err))
}

function getInfoByID(req, res)
{
    userModel.findOne({_id:req.params.id})
    .then((user) => {res.send(user)})
    .catch((err) => {res.json(err)})
}

function getHistoryRepair(req, res)
{
    repairModel.find({ $or:[ {'client': req.params.id}, {'technician':req.params.id}]})
    .then( (historyRepair) => res.json(historyRepair))
    .catch((err) => res.json(err))
}

function addNewUser(req, res)
{
    userModel.create(req.body)
    .then((user) => {res.json(user)})
    .catch((err) => {res.json(err)})
}


function updateUserInfo(req, res)
{
    userModel.findOneAndUpdate({_id:req.params.id},req.body,{new: true}) // En findOneAndUpdate hay que añadir explícitamente mediante projection en las opciones: https://stackoverflow.com/questions/43920243/projection-in-mongodb-findoneandupdate
    .then((updatedUser) => {res.json(updatedUser)})
    .catch((err) => res.json(err));
}

function deleteUser(req, res)
{
    userModel.findOneAndRemove({_id:req.params.id})
    .then((removeUser) => {res.json(removeUser)})
    .catch((err) => res.json(err));
}

module.exports = {
    getAllUsers,
    getInfoByID,
    getHistoryRepair,
    addNewUser,
    updateUserInfo,
    deleteUser}