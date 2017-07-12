import ITrigger from './ITrigger';

/**
 * Classe que modela um dispositivo, com o seu identificado e sua relação de eventos,
 * permite com base em suas identificações, delinear quais ações devem ser feitas com o evento
 */
class Dispositivo {

    public id: Number;
    public mqttClientId: String;
    public triggers: Array<ITrigger>;
    public ativo: boolean;

    constructor() {

    }
}

export default Dispositivo;