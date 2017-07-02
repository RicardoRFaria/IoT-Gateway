import TIPO_OPERACAO from './TIPO_OPERACAO';

/**
 * Classe que modela uma operação, que avalia se o valor bate com a operação cadastrada
 */
class Operacao {

    public tipoOperacao: TIPO_OPERACAO;
    public valor: any;
    public valorInicial: number;
    public valorFinal: number;

    constructor() {
        this.tipoOperacao = TIPO_OPERACAO.EQUALS;
    }

    /**
     * Avalia se o valor recebido, esta dentro dos parametros da operacao em questão
     * 
     * @param valor qualquer valor a ser avaliado
     * @return boolean informando se a operação se a operação pode prosseguir
     */
    public prossegue(valor: any): boolean {
        if (this.tipoOperacao === TIPO_OPERACAO.EQUALS) {
            return valor == this.valor;
        } else {
            return valor >= this.valorInicial && valor <= this.valorFinal;
        }
    }
}

export default Operacao;