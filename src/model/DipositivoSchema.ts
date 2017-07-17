import mongoose = require("mongoose");

var dispositivoSchema = new mongoose.Schema({
    nome: String,
    mqttClientId: String,
    idTrigger: String,
    ativo: Boolean
});

export default dispositivoSchema;