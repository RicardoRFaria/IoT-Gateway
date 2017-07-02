import TIPO_OPERACAO from './TIPO_OPERACAO';

interface IOperacao {
    tipoOperacao: TIPO_OPERACAO;
    valor: any;
    valorInicial: number;
    valorFinal: number;
};

export = IOperacao;