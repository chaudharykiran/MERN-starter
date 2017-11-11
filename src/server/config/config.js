module.exports = function() {
    var configs = {};

    configs.development = {
        dbUrl: 'mongodb://localhost/mannko',
        sessionDb: 'mongodb://localhost/mannko_sessions',
        domain: 'localhost'
    };
    configs.test = {
        dbUrl: 'mongodb://localhost/mannko_test',
        sessionDb: 'mongodb://localhost/mannko_sessions_test',
        domain: 'localhost'
    };
    configs.production = {
        dbUrl: process.env.MONGOLAB_URI,
        sessionDb: process.env.MONGOLAB_URI,
        domain: ''
    };

    return configs[process.env.NODE_ENV || 'development'];
}
