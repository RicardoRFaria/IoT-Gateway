import IEvento from '../model/IEvento';
import NexmoSMSApi from '../externalapi/NexmoSMSApi';
import TIPO_EVENTO from '../model/TIPO_EVENTO';

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
            this.smsApi.enviar(evento.destinatario, evento.mensagem);
        }
    }
}

export default EventoApi;