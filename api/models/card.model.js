const mongoose = require('mongoose');

// Es NECESARIO un modelo de tarjeta por varios motivos:
// 1- Pueden haber tarjetas sin haber sido asignada a admins
// 2- Es posible relacionarlo si se hace embebida en los users, pero
// se debería de enlazar los registros directamente con el ID de los admins
// por temas de escalabilidad, es mejor dejar la BD de esta forma para
// aumentar el rendimiento de las búsquedas, ya que busca entre menos datos

const cardSchema = new mongoose.Schema({
    accesCode: {
        type: String,
        required: [1, "The acces code is necesary"]
    }
})

const cardModel = mongoose.model('Card', cardSchema);
module.exports = cardModel;