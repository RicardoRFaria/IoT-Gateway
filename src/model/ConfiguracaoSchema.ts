import mongoose = require("mongoose");

var configuracaoSchema = new mongoose.Schema({
    tipo: String,
    apikey: String,
    apisecret: String,
    virtualnumber: String,
});

export default configuracaoSchema;