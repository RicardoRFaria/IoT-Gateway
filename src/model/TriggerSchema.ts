import mongoose = require("mongoose");

import EventoSchema from './EventoSchema';
import OperacaoSchema from './OperacaoSchema';

var TriggerSchema = new mongoose.Schema({
    eventosRelacionados: [EventoSchema],
    operacao: OperacaoSchema
});

export default TriggerSchema;