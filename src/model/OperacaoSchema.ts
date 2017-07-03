import mongoose = require("mongoose");
import TIPO_OPERACAO from './TIPO_OPERACAO';

var OperacaoSchema = new mongoose.Schema({
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
OperacaoSchema.methods.prossegue = function (valor: any) {
    console.log('prossegue atingido');
    console.log('tipo: ' + this.tipo);
    console.log('valor: ' + this.valor);
    if (this.tipo === TIPO_OPERACAO.EQUALS) {
        return valor == this.valor;
    } else {
        return valor >= this.valorInicial && valor <= this.valorFinal;
    }
}

export default OperacaoSchema;