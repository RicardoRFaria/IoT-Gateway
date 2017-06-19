import Operacao from './Operacao';

/**
 * Classe que define uma operação de Range, ou seja, se o valor numerico recebido, esta dentre o intervalor de valores
 */
class OperacaoRange extends Operacao {

    private valorInicial: number;
    private valorFinal: number;

    /**
     * Avalia se o valor numerico recebido, esta entre o range cadastrado
     * 
     * @param valor qualquer valor a ser avaliado
     * @return boolean informando se a operação se a operação pode prosseguir
     */
    prossegue(valor: any): boolean {
        if (Number.isNaN(valor)) {
            return false;
        }
        return valor >= this.valorInicial && valor <= this.valorFinal;
    }

}

export default OperacaoRange;