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
                    console.error(err);
                    return;
                }
                let isSucesso = responseData.messages[0].status === 0;
                if (isSucesso) {
                    console.info('SMS enviado com sucesso!');
                    console.info(responseData);
                } else {
                    console.error('Falha ao enviar SMS. Mensagem: ' + responseData.messages[0]['error-text']);
                }
                
            }
        );
    }
}

export default NexmoSmsApi;
