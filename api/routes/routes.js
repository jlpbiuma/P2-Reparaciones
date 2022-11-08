// 1) Importar express para poder utilizarlo
const express = require('express')
const api = express()
// 2) Importar las rutas/funciones que se vayan a querer utilizar (mediante destructuring)
const userRoutes = require('./user.routes.js');
api.use('/users', userRoutes);
const repairRoutes = require('./repair.routes.js')
api.use('/repairs', repairRoutes)
const authRoutes = require('./auth.routes.js');
api.use('/auth', authRoutes);

module.exports = api;