let dbconfig = {
    //using ascoltatore
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'ascoltatori',
    mongo: {}
};

let settings = {
    port: 1883,
    backend: dbconfig
};

export default settings;