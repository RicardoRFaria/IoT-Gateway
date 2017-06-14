let dbconfig = {
    //using ascoltatore
    type: 'mongo',
    url: 'mongodb://admin:iot-gateway@localhost:27017/',
    pubsubCollection: 'mqtt',
    mongo: {}
};

let settings = {
    port: 1883,
    backend: dbconfig
};

export default settings;