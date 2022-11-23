const repairModel = require("../models/repair.model.js");
var ObjectId = require('mongoose').Types.ObjectId;

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

function getAllUnasignedRepairs(req, res) {
    repairModel.find()
        .then((repairs) => res.json(filterRepairs(repairs,"unasigned")))
        .catch((err) => res.json(err))
}

function getAllUnasignedRepairsByClientId(req, res) {
    repairModel.find({client: req.params.userId})
        .then((repairs) => res.json(filterRepairs(repairs,"unasigned")))
        .catch((err) => res.json(err))
}

function getAllAsignedRepairs(req, res) {
    repairModel.find()
        .then((repairs) => res.json(filterRepairs(repairs,"asigned")))
        .catch((err) => res.json(err))
}

function getAllAsignedRepairsByUserId(req, res) {
    repairModel.find({ $or: [{client: new ObjectId(req.params.id)}, {technician: new ObjectId(req.params.id)}]})
        .then((repairs) => res.json(filterRepairs(repairs,"asigned")))
        .catch((err) => res.json(err))
}

function getAllDoneRepairs(req, res) {
    repairModel.find()
        .then((repairs) => res.json(filterRepairs(repairs,"done")))
        .catch((err) => res.json(err))
}

function getAllDoneRepairsByUserId(req, res) {
    console.log(req.params.id)
    repairModel.find({ $or: [{client: new ObjectId(req.params.id)}, {technician: new ObjectId(req.params.id)}]})
        .then((repairs) => res.json(filterRepairs(repairs,"done")))
        .catch((err) => res.json(err))
}

function filterRepairs(repairs, state) {
    if( state == "unasigned"){
        return repairs.filter(element => element._doc.technician == undefined )
    }
    else if ( state == "asigned"){
        return repairs.filter(element => element._doc.technician != undefined && element._doc.techDiagnosis == undefined && element._doc.pickupDate == undefined && element._doc.price == undefined)
    }
    else if ( state == "done"){
        return repairs.filter(element => element._doc.techDiagnosis != undefined && element._doc.pickupDate != undefined && element._doc.price != undefined)
    }
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

function putAsignToEmployee(req, res) {
    repairModel.findByIdAndUpdate({ _id: req.params.id }, {technician: req.body.technician}, { new: true })
        .then((repair) => { res.json(repair) })
        .catch((err) => { res.json(err) })
}

function putRepairToDone(req, res) {
    repairModel.findByIdAndUpdate({ _id: req.params.id },{ techDiagnosis: req.body.techDiagnosis, pickupDate: req.body.pickupDate, price: req.body.price },{ new: true })
        .then((repair) => { res.json(repair) })
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
    getAllUnasignedRepairs,
    getAllUnasignedRepairsByClientId,
    getAllAsignedRepairs,
    getAllAsignedRepairsByUserId,
    getAllDoneRepairs,
    getAllDoneRepairsByUserId,
    addNewRepair,
    updateNewRepair,
    putEnterDate,
    putPickUpDate,
    putPrice,
    putAsignToEmployee,
    putRepairToDone,
    deleteRepair
}