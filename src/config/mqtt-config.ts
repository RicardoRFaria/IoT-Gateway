let dbconfig = {
    //using ascoltatore
    type: 'mongo',
    url: 'mongodb://admin@localhost:27017/',
    pubsubCollection: 'mqtt',
    mongo: {}
};

let settings = {
    port: 1885,
    backend: dbconfig
};

export default settings;