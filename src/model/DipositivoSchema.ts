import mongoose = require("mongoose");

var dispositivoSchema = new mongoose.Schema({
    mqttClientId: String,
    idEvento: String,
    ativo: Boolean
});

export default dispositivoSchema;