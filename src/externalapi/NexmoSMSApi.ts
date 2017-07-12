import * as Nexmo from 'nexmo';
const nexmo = new Nexmo({
    apiKey: '01e67d9e',
    apiSecret: '95674ea318465f5e'
});
const VIRTUAL_NUMBER = '5562982081739';
const NUMERO_DESTINO = '5562982081739';

class EventoApi {

    constructor() {
    }

    public enviarSMS(texto: String) {
        console.log('Enviando SMS para o numero: ' + NUMERO_DESTINO + ' com o texto: ' + texto);
        nexmo.message.sendSms(
            VIRTUAL_NUMBER, NUMERO_DESTINO, texto,
            (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    console.dir(responseData);
                }
            }
        );
    }
}

export default EventoApi;