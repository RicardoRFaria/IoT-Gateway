import mongoose = require('mongoose');

const HistoricoEvento = new mongoose.Schema({
    idDispositivo: String,
    nomeTrigger: String,
    data: Date
});

export default HistoricoEvento;
