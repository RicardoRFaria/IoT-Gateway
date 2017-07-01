import Evento from '../model/Evento';
import NexmoSMSApi from '../externalapi/NexmoSMSApi';

class EventoApi {

    private smsApi: NexmoSMSApi;

    constructor() {
        this.smsApi = new NexmoSMSApi();
    }

    public executarEvento(evento: Evento) {
        if (evento.id == 'sms') {
            this.smsApi.enviarSMS('Evento atendido');
        }
    }
}

export default EventoApi;