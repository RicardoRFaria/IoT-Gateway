import mongoose = require("mongoose");
import IEvento = require("./IEvento");

interface IEventoModel extends IEvento, mongoose.Document { }

var eventoSchema = new mongoose.Schema({
    id: String,
    nome: String,
    descricao: String
});

/**
 * Modela uma classe de evento, com sua identificação, que permite verificar o que este evento executa de código,
 * seu nome e sua descrição
 */
var Evento = mongoose.model<IEventoModel>("Evento", eventoSchema);

export default Evento;