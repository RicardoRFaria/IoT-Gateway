import mongoose = require("mongoose");
import IOperacao = require("./IOperacao");
import OperacaoSchema = require("./OperacaoSchema");

interface IOperacaoModel extends IOperacao, mongoose.Document { }

/**
 * Modela uma classe de evento, com sua identificação, que permite verificar o que este evento executa de código,
 * seu nome e sua descrição
 */
var Operacao = mongoose.model<IOperacaoModel>("Operacao", OperacaoSchema);

export default Operacao;
