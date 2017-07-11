import mongoose = require("mongoose");

var OperacaoSchema = new mongoose.Schema({
    tipo: Number,
    valor: String,
    valorInicial: Number,
    valorFinal: Number
});

export default OperacaoSchema;