const repairModel = require("../models/repair.model.js");


function getAllRepairs(req, res) {
    repairModel.find()
        .then((repairs) => { res.json(repairs) })
        .catch((err) => { res.json(err) })
}

function getRepairById(req, res) {
    repairModel.findById(req.params.id)
        .then((repair) => {
            if (repair.client == res.locals.user.id || repair.technician == res.locals.user.id || res.locals.user.rol == "admin") {
                res.json(repair)
            }
            else
            {
                res.json("No admited user!");
            }
        })
        .catch((err) => { res.json(err) })
}

function getEnterDate(req, res) {
    repairModel.findOne({ _id: req.params.id })
        .then((repair) => res.json(repair.enterDate))
        .catch((err) => res.json(err))
}

function getPickUpDate(req, res) {
    repairModel.findOne({ _id: req.params.id })
        .then((repair) => res.json(repair.pickupDate))
        .catch((err) => res.json(err))
}

function getPrice(req, res) {
    repairModel.findOne({_id: req.params.id})
        .then((repair) => res.json(repair.price))
        .catch((err) => res.json(err))
}

function addNewRepair(req, res) {
    repairModel.create(req.body)
        .then((newRepair) => { res.json(newRepair) })
        .catch((err) => { res.json(err) })
}

function updateNewRepair(req, res) {
    repairModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updateRepair) => { res.json(updateRepair) })
        .catch((err) => { res.json(err) })
}

function putEnterDate(req, res) {
    repairModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((repair) => { res.json(repair.enterDate) })
        .catch((err) => { res.json(err) })
}

function putPickUpDate(req, res) {
    repairModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((repair) => { res.json(repair.pickupDate) })
        .catch((err) => { res.json(err) })
}

function putPrice(req, res) {
    repairModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((repair) => { res.json(repair.price) })
        .catch((err) => { res.json(err) })
}

function deleteRepair(req, res) {
    repairModel.findOne({ _id: req.params.id })
        .then(repair => {
            if (repair == null)
            {
                res.json({ message: "This repair does not exist!"});
            }
            else if (repair.client == res.locals.user.id || repair.technician == res.locals.user.id || res.locals.user.rol == "admin") {
                repairModel.findOneAndDelete({_id:req.params.id})
                    .then((deleteRepair) => { res.json(deleteRepair) })
                    .catch((err) => { res.json(err) })
            }
            else {
                res.json({ message: "User no admited!" });
            }
        })
}

module.exports = {
    getAllRepairs,
    getRepairById,
    getEnterDate,
    getPickUpDate,
    getPrice,
    addNewRepair,
    updateNewRepair,
    putEnterDate,
    putPickUpDate,
    putPrice,
    deleteRepair
}