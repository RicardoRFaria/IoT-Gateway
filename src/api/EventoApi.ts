import IEvento from '../model/IEvento';
import NexmoSMSApi from '../externalapi/NexmoSMSApi';

class EventoApi {

    private smsApi: NexmoSMSApi;

    constructor() {
        this.smsApi = new NexmoSMSApi();
    }

    public executarEvento(evento: IEvento) {
        if (evento.id == 'sms') {
            this.smsApi.enviarSMS('Evento atendido');
        }
    }
}

export default EventoApi;