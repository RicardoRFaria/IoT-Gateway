import Evento from './Evento';
import Operacao from './operacoes/Operacao';

/**
 * Modela o registro de uma trigger, onde avaliamos um valor, e verificamos se ele esta em algum range ou é igual a algo
 * para acionar a ação atrelada
 */
class Trigger {

    public eventosRelacionados: Array<Evento>;
    public operacao: Operacao;

    constructor() {

    }
}

export default Trigger;