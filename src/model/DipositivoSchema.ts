import mongoose = require('mongoose');

const dispositivoSchema = new mongoose.Schema({
    nome: String,
    mqttClientId: String,
    idTrigger: String,
    ativo: Boolean
});

export default dispositivoSchema;
