const mongoose = require("mongoose")
const repairModel = require("../models/repair.model.js");
const userModel = require("../models/user.model.js");


function getAllRepairs(req, res) {
    repairModel.find()
        .then((repairs)=> {res.json(repairs)})
        .catch((err) => {res.json(err)})
}

function getRepairById (req, res) {
    repairModel.findById(req.params.id)
    .then((repair) => {res.json(repair)})
    .catch((err) => {res.json(err)})
}

function getEnterDate(req, res){
    repairModel.findOne({_id:req.params.id})
    .then((repair) => res.json(repair.enterDate))
    .catch((err) => res.json(err))
}

function getPickUpDate(req, res){
    repairModel.findOne({_id:req.params.id})
    .then((repair) => res.json(repair.pickupDate))
    .catch((err) => res.json(err))
}

function addNewRepair(req, res) {
    repairModel.create(req.body)
    .then((newRepair) => {res.json(newRepair)})
    .catch((err) => {res.json(err)})
}

function updateNewRepair(req, res) {
    repairModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then((updateRepair) => {res.json(updateRepair)})
    .catch((err) => {res.json(err)})
}

function putEnterDate(req, res){
    repairModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then((repair) => {res.json(repair.enterDate)})
    .catch((err) => {res.json(err)})
}

function putPickUpDate(req, res){
    repairModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then((repair) => {res.json(repair.pickupDate)})
    .catch((err) => {res.json(err)})
}

function deleteRepair(req, res) {
    repairModel.findOneAndDelete(req.params.id)
    .then((deleteRepair) => {res.json(deleteRepair)})
    .catch((err) => {res.json(err)})
}

module.exports = {
    getAllRepairs,
    getRepairById,
    getEnterDate,
    getPickUpDate,
    addNewRepair,
    updateNewRepair,
    putEnterDate,
    putPickUpDate,
    deleteRepair
}