const mongoose = require('mongoose')

const userSchema = new Schema({
    rol: {
        type: String,
        enum: ["client","tecnical"],
        required: [true, "You have to introduce the role"]
    },
    name: {
        type: String,
        required: [true, "You have to introduce the name"]
    },
    dni: {
        type: String,
        required: [true, "You have to introduce the dni"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This Email already exists in our DB"],
    },
    password: {
        type: String,
        minLength: [8,"Carácteres insuficientes"],
        required: [true,"You have to introduce the password"]
    },
    phone:{ 
        type: String,
        required: [true,"You have to introduce the phone"]
    },
    direction: {
        street: {
            type: String
        },
        cp: {
            type: String
        } 
    },
    historyrepair: [
        mongoose.Types.ObjectId
    ],
    donerepairs: [
        mongoose.Types.ObjectId
    ]
})

