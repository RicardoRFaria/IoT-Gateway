interface IDispositivo {
    _id: String;
    nome: String;
    mqttClientId: String;
    idTrigger: String;
    ativo: Boolean;
}

export = IDispositivo;
