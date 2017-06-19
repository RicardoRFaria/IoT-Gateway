import Operacao from './Operacao';

/**
 * Classe que define uma operação de igual, avaliando se o valor recebido bate com o previamente cadastrado
 */
class OperacaoEquals extends Operacao {

    private valor: any;

    /**
     * Avalia se o valor recebido bate com o previamente cadastrado
     * 
     * @param valor qualquer valor a ser avaliado
     * @return boolean informando se a operação se os valores são iguais, e portanto a operação deve prosseguir
     */
    prossegue(valor: any): boolean {
        return valor == this.valor;
    }

}

export default OperacaoEquals;