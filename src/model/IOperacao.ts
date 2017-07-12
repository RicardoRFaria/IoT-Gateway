import TIPO_OPERACAO from './TIPO_OPERACAO';

interface IOperacao {
    tipo: TIPO_OPERACAO;
    valor: any;
    valorInicial: number;
    valorFinal: number;
};

export = IOperacao;