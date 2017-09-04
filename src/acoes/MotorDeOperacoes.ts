import TIPO_OPERACAO from '../model/TIPO_OPERACAO';
import IOperacao from '../model/IOperacao';

class MotorDeOperacoes {

    /**
     * Avalia se o valor recebido, esta dentro dos parametros da operacao em questão
     *
     * @param operacao a ser avaliada
     * @param valor qualquer valor a ser avaliado
     * @param ignoraLog modificador que informa se esta operação de verificação gerará logs de sua execução
     * @return boolean informando se a operação se a operação pode prosseguir
     */
    public prossegue(operacao: IOperacao, valor: any, ignoraLog?: boolean) {
        if (operacao.tipo === TIPO_OPERACAO.EQUALS) {
            if (!ignoraLog) {
                console.log('Tipo da operação: EQUALS');
                console.log('Valor esperado para atender: ' + operacao.valor + '.');
            }
            return valor == operacao.valor;
        } else {
            if (!ignoraLog) {
                console.log('Tipo da operação: RANGE');
                console.log('Valor esperado para atender começando em: ' + operacao.valorInicial + ' até ' + operacao.valorFinal + '.');
            }
            return valor >= operacao.valorInicial && valor <= operacao.valorFinal;
        }
    }

}

export default new MotorDeOperacoes();
