import Trigger from '../model/Trigger';
import Dispositivo from '../model/Dispositivo';
import TIPO_OPERACAO from '../model/TIPO_OPERACAO';
import TIPO_EVENTO from '../model/TIPO_EVENTO';
import Configuracao from '../model/Configuracao';

/**
 * Api responsavel por salvar os dados basicos para teste
 */
class DadosBasicosApi {

    public criar(req: any, res: any): void {
        let operacao =  {
            tipo: TIPO_OPERACAO.EQUALS,
            valor: 'true'
        };

        let evento = {
            tipo: TIPO_EVENTO.MENSAGEM,
            destinatario: '5562982081739',
            mensagem: 'Mensagem programada para quando o evento for satisfeito'
        };
        let eventosRelacionados = [evento];
        let trigger = new Trigger({
            nome: 'Trigger gerada por padrao',
            operacao: operacao,
            eventosRelacionados: eventosRelacionados
        });
        trigger.save(function (err, triggerSalva) {
            console.log(err);
            console.log(triggerSalva);

            let idTrigger = trigger._id;
            let dispositivo = new Dispositivo({
                nome: 'Celular com MyMqtt',
                mqttClientId: '*',
                idTrigger: idTrigger,
                ativo: true
            });

            dispositivo.save(function (err, dispositivoSalvo) {
                console.log(err);
                console.log(dispositivoSalvo);
                res.json('Sucesso!');
            });
        });

        let configuracao = new Configuracao({
            tipo: 'sms',
            apikey: '01e67d9e',
            apisecret: '95674ea318465f5e',
            virtualnumber: '5562982081739'
        });
        configuracao.save(function (err, configuracaoSalva) {
            console.log(err);
            console.log(configuracaoSalva);
        });
    }
}

export default DadosBasicosApi;