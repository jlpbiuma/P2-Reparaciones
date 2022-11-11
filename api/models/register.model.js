const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    incomingTime: {
        type: Date
    },
    outcomingTime: {
        type: Date
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId    
    }
})

const registerModel = mongoose.model('Register', registerSchema);

module.exports = registerModel;