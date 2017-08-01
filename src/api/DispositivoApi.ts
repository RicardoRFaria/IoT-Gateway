import Dispositivo from '../model/Dispositivo';
import DispositivoListagemDTO from '../dto/DispositivoListagemDTO';

class DispositivoApi {

    public get(req: any, res: any): void {
        let id = req.params.id;
        if (!id) {
            res.status(400).send('Dispositivo não recebido.');
            return;
        }
        Dispositivo.find({ _id: id }, function (err, dispositivos: Array<Dispositivo>) {
            if (err) {
                res.status(500).send('Falha ao buscar dispositivo com id: ' + id + ', erro: ' + err);
                return;
            }
            if (dispositivos.length === 0) {
                res.status(400).send('Dispositivo com id: ' + id + 'não existe.');
                return;
            }
            res.json(dispositivos[0]);
        });
    }

    public excluir(req: any, res: any): void {
        let id = req.params.id;
        if (!id) {
            res.status(400).send('Dispositivo não recebido.');
            return;
        }
        Dispositivo.remove({ _id: id }, function (err) {
            if (err) {
                res.status(500).send('Não foi possível excluir dipositivo com id: ' + id + ', erro: ' + err);
                return;
            }
            res.send('Excluído com sucesso');
        });
    }

    public listar(res: any): void {
        Dispositivo.find({}, function (err, dispositivos: Array<Dispositivo>) {
            if (err) {
                res.status(500).send('Falha ao listar os dispositivos' + err);
                return;
            }
            let dtos = [];
            dispositivos.forEach(function (elemento: Dispositivo) {
                dtos.push(new DispositivoListagemDTO(elemento));
            });
            res.json(dtos);
        });
    }

    public salvar(req: any, res: any): void {
        // Executar validação
        let dispositivo = req.body;
        delete dispositivo._id;
        let dispositivoPersistencia = new Dispositivo(dispositivo);
        dispositivoPersistencia.save(function (err, resultado) {
            if (err) {
                res.status(500).send('Falha ao persistir dispositivo' + err);
                return;
            }
            res.json(resultado);
        });
    }

    public editar(req: any, res: any): void {
        // Executar validação
        let dispositivo = req.body;
        let id = dispositivo._id;
        if (!id) {
            res.status(400).send('Dispositivo nao existe.');
            return;
        }
        Dispositivo.findById(id, function (err, dispositivoCarregado: Dispositivo) {
            if (err) {
                res.status(500).send('Falha ao editar dispositivo' + err);
                return;
            }
            
            dispositivoCarregado.nome = dispositivo.nome;
            dispositivoCarregado.mqttClientId = dispositivo.mqttClientId;
            dispositivoCarregado.idTrigger = dispositivo.idTrigger;
            dispositivoCarregado.ativo = dispositivo.ativo;

            dispositivoCarregado.save(function (err, dispositivoAtualizado) {
                if (err) {
                    res.status(500).send('Falha ao persistir atualização do dispositivo' + err);
                    return;
                }
                res.send(dispositivoAtualizado);
            });
        });
    }
}

export default DispositivoApi;