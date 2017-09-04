import mongoose = require('mongoose');

const HistoricoMensagem = new mongoose.Schema({
    idDispositivo: String,
    valor: String,
    data: Date
});

export default HistoricoMensagem;
