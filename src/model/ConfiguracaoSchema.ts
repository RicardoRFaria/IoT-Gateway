import mongoose = require("mongoose");

var configuracaoSchema = new mongoose.Schema({
    apikey: String,
    apisecret: String,
    virtualnumber: String,
});

export default configuracaoSchema;