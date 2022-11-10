const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    incomingTime: {
        type: Date
    },
    outcomingTime: {
        type: Date
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Is necesary the accesCode during incoming and outcoming Time"]
    }
})

const registerModel = mongoose.model('Register', registerSchema);

module.exports = registerModel;