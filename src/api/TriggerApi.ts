import Trigger from '../model/Trigger';
import TriggerListagemDTO from '../dto/TriggerListagemDTO';

/**
 * Controller responsavel por expor e executar acoes para a Trigger e seus subdocumentos
 */
class TriggerApi {

    public get(req: any, res: any): void {
        let id = req.params.id;
        if (!id) {
            res.status(400).send('Trigger não recebida.');
            return;
        }
        Trigger.find({ _id: id }, function (err, triggers: Array<Trigger>) {
            if (err) {
                res.status(500).send('Falha ao buscar trigger com id: ' + id + ', erro: ' + err);
                return;
            }
            if (triggers.length === 0) {
                res.status(400).send('Trigger com id: ' + id + 'não existe.');
                return;
            }
            res.json(triggers[0]);
        });
    }

    public excluir(req: any, res: any): void {
        let id = req.params.id;
        if (!id) {
            res.status(400).send('Trigger não recebida.');
            return;
        }
        Trigger.remove({ _id: id }, function (err) {
            if (err) {
                res.status(500).send('Não foi possível excluir trigger com id: ' + id + ', erro: ' + err);
                return;
            }
            res.send('Excluído com sucesso');
        });
    }

    public listar(res: any): void {
        Trigger.find({}, function (err, triggers: Array<Trigger>) {
            if (err) {
                res.status(500).send('Falha ao listar as triggers' + err);
                return;
            }
            let dtos = [];
            triggers.forEach(function (elemento: Trigger) {
                dtos.push(new TriggerListagemDTO(elemento));
            });
            res.json(dtos);
        });
    }

    public salvar(req: any, res: any): void {
        // Executar validação
        let trigger = req.body;
        delete trigger._id;
        let triggerPersistencia = new Trigger(trigger);
        triggerPersistencia.save(function (err, resultado) {
            if (err) {
                res.status(500).send('Falha ao persistir trigger' + err);
                return;
            }
            res.json(resultado);
        });
    }

    public editar(req: any, res: any): void {
        // Executar validação
        let trigger = req.body;
        let id = trigger._id;
        if (!id) {
            res.status(400).send('Trigger nao existe.');
            return;
        }
        Trigger.findById(id, function (err, triggerCarregada: Trigger) {
            if (err) {
                res.status(500).send('Falha ao editar trigger' + err);
                return;
            }

            triggerCarregada.nome = trigger.nome;
            triggerCarregada.eventosRelacionados = trigger.eventosRelacionados;
            triggerCarregada.operacao = trigger.operacao;

            triggerCarregada.save(function (err, triggerAtualizada) {
                if (err) {
                    res.status(500).send('Falha ao persistir atualização da trigger' + err);
                    return;
                }
                res.send(triggerAtualizada);
            });
        });
    }
}

export default TriggerApi;
