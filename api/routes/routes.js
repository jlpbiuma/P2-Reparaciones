// 1) Importar express para poder utilizarlo
const userRoutes = require('./user.routes.js');
const repairRoutes = require('./repair.routes.js')
const authRoutes = require('./auth.routes.js');
const express = require('express')
const api = express()

// 2) Importar las rutas/funciones que se vayan a querer utilizar (mediante destructuring)

api.use('/users', userRoutes);
api.use('/repairs', repairRoutes)
api.use('/auth', authRoutes);

module.exports = api;