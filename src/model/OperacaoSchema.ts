import mongoose = require('mongoose');

const OperacaoSchema = new mongoose.Schema({
    tipo: Number,
    valor: String,
    valorInicial: Number,
    valorFinal: Number
}, { _id: false });

export default OperacaoSchema;
