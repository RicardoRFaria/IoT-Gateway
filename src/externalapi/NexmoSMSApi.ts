import * as Nexmo from 'nexmo';
import Configuracao from '../model/Configuracao';
/**
 * Api de terceiros responsável pelo envio de mensagens SMS
 */
class NexmoSmsApi {

    /**
     * Envia o SMS para o destinatário com o texto indicado
     *
     * @param destinatario telefone do destinatario
     * @param texto conteudo
     * @param configuracao Configuracao para envio de SMS
     */
    public enviar(destinatario: String, texto: String, configuracao: Configuracao) {
        let virtualNumber = configuracao.virtualnumber;
        let nexmo = new Nexmo({
            apiKey: configuracao.apikey,
            apiSecret: configuracao.apisecret
        });
        console.log('Enviando SMS para o numero: ' + destinatario + ' com o texto: ' + texto);
        nexmo.message.sendSms(
            virtualNumber, destinatario, texto,
            (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    console.info('SMS enviado com sucesso!');
                    console.info(responseData);
                }
            }
        );
    }
}

export default NexmoSmsApi;
