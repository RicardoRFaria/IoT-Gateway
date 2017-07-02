import Evento from './Evento';
import Operacao from './Operacao';

/**
 * Modela o registro de uma trigger, onde avaliamos um valor, e verificamos se ele esta em algum range ou é igual a algo
 * para acionar a ação atrelada
 */
class Trigger {

    public eventosRelacionados: Array<Evento>;
    public operacao: Operacao;

    constructor() {
        this.eventosRelacionados = [];
    }
}

export default Trigger;