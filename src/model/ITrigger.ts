import Evento from './Evento';
import Operacao from './Operacao';

interface ITrigger {
    eventosRelacionados: Array<Evento>;
    operacao: Operacao;
};

export = ITrigger;