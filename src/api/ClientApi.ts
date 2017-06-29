import Dispositivo from '../model/Dispostivo';
import DispositivoService from '../service/DispositivoService';

class ClientApi {

    private dispositivoService: DispositivoService;

    constructor() {
        this.dispositivoService = new DispositivoService();
    }

    public listar(res: any): void {
        res.json(this.dispositivoService.getListarMock());
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

export default ClientApi;