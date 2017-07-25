import mongoose = require("mongoose");

var eventoSchema = new mongoose.Schema({
    tipo: Number,
    destinatario: String,
    mensagem: String
}, { _id: false });

export default eventoSchema;