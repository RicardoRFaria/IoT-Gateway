import IEvento from './IEvento';
import IOperacao from './IOperacao';

interface ITrigger {
    eventosRelacionados: Array<IEvento>;
    operacao: IOperacao;
};

export = ITrigger;