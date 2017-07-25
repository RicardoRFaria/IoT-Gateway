import * as Nexmo from 'nexmo';
const nexmo = new Nexmo({
    apiKey: '01e67d9e',
    apiSecret: '95674ea318465f5e'
});
const VIRTUAL_NUMBER = '5562982081739'

/**
 * Api de terceiros responsável pelo envio de mensagens SMS
 */
class NexmoSmsApi {

    /**
     * Envia o SMS para o destinatário com o texto indicado
     * 
     * @param destinatario telefone do destinatario
     * @param texto conteudo
     */
    public enviar(destinatario: String, texto: String) {
        console.log('Enviando SMS para o numero: ' + destinatario + ' com o texto: ' + texto);
        nexmo.message.sendSms(
            VIRTUAL_NUMBER, destinatario, texto,
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

export default NexmoSmsApi;