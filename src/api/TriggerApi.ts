import Trigger from '../model/Trigger';
import TriggerListagemDTO from '../dto/TriggerListagemDTO';

class TriggerApi {

    constructor() {
        
    }

    public listar(res: any): void {
        Trigger.find({}, function (err, triggers: Array<Trigger>) {
            if (err) {
                res.send('Falha ao listar as triggers', err);
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
        let dispositivo = JSON.parse(req.body);
        res.json(dispositivo);
    }

    public editar(req: any, res: any): void {
        let dispositivo = JSON.parse(req.body);
        res.json(dispositivo);
    }
}

export default TriggerApi;