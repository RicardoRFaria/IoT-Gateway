import mongoose = require('mongoose');

const configuracaoSchema = new mongoose.Schema({
    tipo: String,
    apikey: String,
    apisecret: String,
    virtualnumber: String,
});

export default configuracaoSchema;
