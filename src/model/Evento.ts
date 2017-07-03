import mongoose = require("mongoose");
import IEvento = require("./IEvento");
import EventoSchema = require("./EventoSchema");

interface IEventoModel extends IEvento, mongoose.Document { }

/**
 * Modela uma classe de evento, com sua identificação, que permite verificar o que este evento executa de código,
 * seu nome e sua descrição
 */
var Evento = mongoose.model<IEventoModel>("Evento", EventoSchema);

export default Evento;