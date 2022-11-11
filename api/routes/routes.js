const authRoutes = require('./auth.routes.js');
const cardRoute = require('./card.routes');
const registerRoutes = require('./register.routes.js');
const repairRoutes = require('./repair.routes.js')
const userRoutes = require('./user.routes.js');

const express = require('express')
const api = express()

api.use('/auth', authRoutes);
<<<<<<< HEAD
api.use('/card', cardRoute);
api.use('/register', registerRoutes);
api.use('/repairs', repairRoutes)
api.use('/users', userRoutes);
=======
const registerRoutes = require('./register.routes.js');
api.use('/register', registerRoutes);
const cardRoute = require('./card.routes');
api.use('/card', cardRoute);
>>>>>>> rpi

module.exports = api;