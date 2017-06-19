/**
 * Classe que modela uma operação, que avalia se o valor bate com a operação cadastrada
 */
abstract class Operacao {

    /**
     * Avalia se o valor recebido, esta dentro dos parametros da operacao em questão
     * 
     * @param valor qualquer valor a ser avaliado
     * @return boolean informando se a operação se a operação pode prosseguir
     */
    abstract prossegue(valor: any): boolean;
}

export default Operacao;