import Dispositivo from '../model/Dispositivo';

class DispositivoListagemDTO {

    public _id: String;
    public nome: String;
    public mqttClientId: String;
    public idTrigger: String;
    public ativo: String;

    constructor(dispositivo: Dispositivo) {
        this._id = dispositivo._id;
        this.nome = dispositivo.nome;
        this.mqttClientId = dispositivo.mqttClientId;
        this.idTrigger = dispositivo.idTrigger;
        if (dispositivo.ativo) {
            this.ativo = 'Ativo';
        } else {
            this.ativo = 'Inativo';
        }
    }

}

export default DispositivoListagemDTO;
