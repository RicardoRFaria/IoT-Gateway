import mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    tipo: Number,
    destinatario: String,
    mensagem: String
}, { _id: false });

export default eventoSchema;
