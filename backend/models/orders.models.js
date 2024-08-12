const mongoose = require('../config/connection')
const schemaOrder = new mongoose.Schema({
        cliente: { 
            type: mongoose.SchemaTypes.ObjectId
        },
        carrito: {
            any:[]
        },
        subtotal: {
            type: Number,
            default: [0, 'El subtotal por defecto es cero'], min: [0, 'El subtotal mínimo es cero'],
        },
        impuesto: {
            type: Number,
            required: [true, 'Asignar un descuento o un impuesto'],
        },
        total: {
            type: Number,
            default: [0, 'El total por defecto es cero'],   
        },
        estado: {
            type: String,
            required: [true,],
            enum: ['creado', 'pagado','enviado','recibido','cancelado','finalizado'],
        },
    
});

const order = mongoose.model("orders", schemaOrder);
module.exports = order;