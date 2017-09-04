import TIPO_EVENTO from './TIPO_EVENTO';

interface IEvento {
    tipo: TIPO_EVENTO;
    destinatario: String;
    mensagem: String;
}

export = IEvento;
