import Trigger from '../model/Trigger';

class TriggerListagemDTO {

    public _id: String;
    public nome: String;
    public quantidadeEventosRelacionados: Number;

    constructor(trigger: Trigger) {
        this._id = trigger._id;
        this.nome = trigger.nome;
        this.quantidadeEventosRelacionados = trigger.eventosRelacionados.length;
    }

}

export default TriggerListagemDTO;