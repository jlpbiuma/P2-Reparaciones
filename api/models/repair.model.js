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
        ref: "users"
    },
    client: {
        required: [true, "Is necessary to introduce a client"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    pickupDate:  {
        type: Date
    }
})

const repairModel = mongoose.model('Repair', repairSchema )

module.exports = repairModel