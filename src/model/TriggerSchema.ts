import mongoose = require('mongoose');

import EventoSchema from './EventoSchema';
import OperacaoSchema from './OperacaoSchema';

const TriggerSchema = new mongoose.Schema({
    nome: String,
    eventosRelacionados: [EventoSchema],
    operacao: OperacaoSchema
});

export default TriggerSchema;
