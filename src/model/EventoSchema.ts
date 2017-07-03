import mongoose = require("mongoose");

var eventoSchema = new mongoose.Schema({
    id: String,
    nome: String,
    descricao: String
});

export default eventoSchema;