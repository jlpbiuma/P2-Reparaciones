const mongoose = require('mongoose')

const repairSchema = new Schema({
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
    technician: Object._id,
    pickupDate:  {
        type: Date,
        required: true,
    },
})