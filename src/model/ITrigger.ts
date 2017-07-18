import IEvento from './IEvento';
import IOperacao from './IOperacao';

interface ITrigger {
    _id: String;
    nome: String;
    eventosRelacionados: Array<IEvento>;
    operacao: IOperacao;
};

export = ITrigger;