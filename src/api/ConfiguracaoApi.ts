import Configuracao from '../model/Configuracao';

/**
 * Controller responsavel por expor e executar acoes para a Configuracao onde sera utilizado as apis
 */
class ConfiguracaoApi {

    public get(tipo: String, res: any): void {
        Configuracao.find({ tipo: tipo }, function (err, configuracao: Array<Configuracao>) {
            if (err) {
                res.status(500).send('Falha ao buscar configuracao com tipo: ' + tipo + ', erro: ' + err);
                return;
            }
            if (configuracao.length === 0) {
                res.status(404).send('Configuração com tipo: ' + tipo + ' não existe.');
                return;
            }
            res.json(configuracao[0]);
        });
    }

    public salvar(tipo: String, req: any, res: any): void {
        // Executar validação
        let configuracao = req.body;
        Configuracao.remove({ tipo: tipo }).exec();

        let configuracaoPersistencia = new Configuracao(configuracao);
        configuracaoPersistencia.save(function (err, resultado) {
            if (err) {
                res.status(500).send('Falha ao persistir configuração de id: ' + tipo + ', erro:' + err);
                return;
            }
            res.json(resultado);
        });
    }
}

export default ConfiguracaoApi;
