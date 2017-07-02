import mongoose = require("mongoose");
import IOperacao = require("./IOperacao");
import TIPO_OPERACAO from './TIPO_OPERACAO';

interface IOperacaoModel extends IOperacao, mongoose.Document { }

var operacaoSchema = new mongoose.Schema({
    tipo: Number,
    valor: String,
    valorInicial: Number,
    valorFinal: Number
});

/**
 * Avalia se o valor recebido, esta dentro dos parametros da operacao em questão
 * 
 * @param valor qualquer valor a ser avaliado
 * @return boolean informando se a operação se a operação pode prosseguir
 */
operacaoSchema.methods.prossegue = function (valor: any) {
    console.log('prossegue atingido');
    console.log('tipo: ' + this.tipo);
    console.log('valor: ' + this.valor);
    if (this.tipo === TIPO_OPERACAO.EQUALS) {
        return valor == this.valor;
    } else {
        return valor >= this.valorInicial && valor <= this.valorFinal;
    }
}

/**
 * Modela uma classe de evento, com sua identificação, que permite verificar o que este evento executa de código,
 * seu nome e sua descrição
 */
var Operacao = mongoose.model<IOperacaoModel>("Operacao", operacaoSchema);

export default Operacao;
