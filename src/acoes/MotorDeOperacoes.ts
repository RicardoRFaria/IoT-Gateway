import TIPO_OPERACAO from '../model/TIPO_OPERACAO';
import IOperacao from '../model/IOperacao';

class MotorDeOperacoes {

    /**
     * Avalia se o valor recebido, esta dentro dos parametros da operacao em questão
     *
     * @param operacao a ser avaliada
     * @param valor qualquer valor a ser avaliado
     * @return boolean informando se a operação se a operação pode prosseguir
     */
    public prossegue(operacao: IOperacao, valor: any) {
        console.log('Motor de operações atingido');
        console.log('tipo: ' + operacao.tipo);
        console.log('valor: ' + operacao.valor);
        if (operacao.tipo === TIPO_OPERACAO.EQUALS) {
            return valor == operacao.valor;
        } else {
            return valor >= operacao.valorInicial && valor <= operacao.valorFinal;
        }
    }

}

export default new MotorDeOperacoes();
