let dbconfig = {
    type: 'mongo',
    url: 'mongodb://admin@localhost:27017/',
    pubsubCollection: 'mqtt',
    mongo: {}
};

let settings = {
    port: 1885,
    backend: dbconfig,
    stats: false
};

export default settings;
