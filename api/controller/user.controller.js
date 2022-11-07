const mongoose = require("mongoose")
const userModel = require("../models/user.model");


function getAllUsers(req, res)
{
    userModel.find()
    .then((users) => {res.json(users)})
    .catch((err) => res.json(err))
}

function getInfoFromClientID(req, res)
{
    userModel.findOne({_id:req.params.id, rol:"client"},{donerepairs:0})
    .then((user) => {res.send(user)})
    .catch((err) => {res.json(err)})
}

// Nueva ruta: rol = admin
function getInfoFromAdminID(req, res)
{
    userModel.findOne({_id:req.params.id, rol:"technical"},{historyrepairs:0})
    .then((user) => {res.send(user)})
    .catch((err) => {res.json(err)})
}

function addNewUser(req, res)
{
    console.log(req)
    //userModel.create(req.body)
}

function updateUserInfo(req, res)
{

}

function deleteUser (req, res)
{

}

module.exports = {getAllUsers, getInfoFromClientID, getInfoFromAdminID, addNewUser, updateUserInfo, deleteUser}