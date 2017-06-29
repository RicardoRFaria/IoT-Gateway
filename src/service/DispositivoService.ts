import Dispositivo from '../model/Dispostivo';

class DispositivoService {

    public getListarMock(): Array<Dispositivo> {
        let dispUm = new Dispositivo();
        dispUm.id = 10;
        dispUm.mqttClientId = 'teste';
        dispUm.ativo = true;

        let dispDois = new Dispositivo();
        dispDois.id = 5;
        dispDois.mqttClientId = 'teste dois';
        dispDois.ativo = false;

        return [dispUm, dispDois];
    }
}

export default DispositivoService;