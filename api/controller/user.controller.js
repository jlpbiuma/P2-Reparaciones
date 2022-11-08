const mongoose = require("mongoose")
const userModel = require("../models/user.model");
const repairModel = require("../models/repair.model");

function getAllUsers(req, res)
{
    userModel.find()
    .then((users) => {res.json(users)})
    .catch((err) => res.json(err))
}

function getInfoFromClientID(req, res)
{
    console.log(req.params.id);
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

function getHistoryRepair(req, res)
{
    repairModel.find({client: req.params.id})
    .then( (historyRepair) => res.json(historyRepair))
    .catch((err) => res.json(err))
}

function filterObject(newUser, filteredKey)
{
    let object = {};
    let keys = Object.keys(newUser._doc);
    let values = Object.values(newUser._doc);
    keys.forEach((key,index) => {
        if (key != filteredKey)
        {
            object[key] = values[index];
        }
    });
    return object;
}

function addNewClient(req, res)
{
    userModel.create(req.body)
    .then((newClient) => {
        const object = filterObject(newClient,"donerepairs");
        res.json(object);
    })
    .catch((err) => {res.json(err)})
}

function addNewAdmin(req, res)
{
    userModel.create(req.body)
    .then((newAdmin) => {
        const object = filterObject(newAdmin, "historyrepairs")
        res.json(object);
    })
    .catch((err) => {res.json(err)})
}

function updateClientInfo(req, res)
{
    userModel.findOneAndUpdate({_id:req.params.id},req.body,{
        new: true,
        projection: {donerepairs:0} // En findOneAndUpdate hay que añadir explícitamente mediante projection en las opciones: https://stackoverflow.com/questions/43920243/projection-in-mongodb-findoneandupdate
    })
    .then((updatedUser) => {
        res.json(updatedUser);
    })
    .catch((err) => res.json(err));
}

function updateAdminInfo(req, res)
{
    userModel.findOneAndUpdate({_id:req.params.id},req.body,{
        new: true,
        projection: {historyrepairs: 0}
    })
    .then((updateAdmin) => {
        res.json(updateAdmin);
    })
    .catch((err) => res.json(err))
}

function deleteClient(req, res)
{
    userModel.findOneAndRemove({_id:req.params.id})
    .then((removeClient) => {
        console.log(removeClient);
        res.json(removeClient);
    })
    .catch((err) => res.json(err));
}

function deleteAdmin(req, res)
{
    userModel.findByIdAndRemove({_id:req.params.id})
    .then((removeAdmin) => {
        console.log("Admin has been removed")
        res.json(removeAdmin)
    })
    .catch((err) => res.json(err));
}

module.exports = {
    getAllUsers,
    getInfoFromClientID, 
    getInfoFromAdminID,
    getHistoryRepair,
    addNewClient, 
    addNewAdmin, 
    updateClientInfo, 
    updateAdminInfo, 
    deleteClient, 
    deleteAdmin}