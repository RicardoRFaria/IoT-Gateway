import mongoose = require("mongoose");

var eventoSchema = new mongoose.Schema({
    nome: String,
    descricao: String
}, { _id: false });

export default eventoSchema;