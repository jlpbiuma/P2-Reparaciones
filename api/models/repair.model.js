const mongoose = require('mongoose')

const repairSchema = new mongoose.Schema({
    device : {
        type: String,
        required: true,
    },
    issue : {
        type: String,
        required: true,
    },
    selfdiagnosis: {
        type: String,
        required: true,
    },
    enterDate:  {
        type: Date,
        required: true,
    },
    techDiagnosis: {
        type: String,
        required: true,
    },
    technician: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "technical"
    },
    pickupDate:  {
        type: Date,
        required: true,
    }
})

const repairModel = mongoose.model('Repair', repairSchema )

module.exports = repairModel