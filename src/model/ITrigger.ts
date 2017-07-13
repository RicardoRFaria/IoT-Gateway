import IEvento from './IEvento';
import IOperacao from './IOperacao';

interface ITrigger {
    nome: String,
    eventosRelacionados: Array<IEvento>;
    operacao: IOperacao;
};

export = ITrigger;