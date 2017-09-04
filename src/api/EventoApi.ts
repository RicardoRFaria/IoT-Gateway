import IEvento from '../model/IEvento';
import NexmoSMSApi from '../externalapi/NexmoSMSApi';
import TIPO_EVENTO from '../model/TIPO_EVENTO';
import Configuracao from '../model/Configuracao';

/**
 * Api responsável por tratamento e execução de eventos
 */
class EventoApi {

    private smsApi: NexmoSMSApi;

    constructor() {
        this.smsApi = new NexmoSMSApi();
    }

    /**
     * Executa a ação relacionada ao evento
     *
     * @param evento a ser executado
     */
    public executarEvento(evento: IEvento) {
        if (evento.tipo === TIPO_EVENTO.MENSAGEM) {
            this.enviarSMS(evento);
        }
    }

    private enviarSMS(evento: IEvento) {
        let smsApi = this.smsApi;
        Configuracao.find({ tipo: 'sms' }, function (err, configuracoes: Array<Configuracao>) {
            if (err) {
                console.error('Falha ao buscar configuracao de SMS, erro: ' + err);
            }
            if (configuracoes.length === 0) {
                console.error('Nenhuma configuração de SMS incluída. Não será possível enviar a mensagem.');
            } else {
                let configuracao = configuracoes[0];
                smsApi.enviar(evento.destinatario, evento.mensagem, configuracao);
            }
        });
    }
}

export default EventoApi;
