const queryString = require('querystring');
const config = require('../config/app.config');

module.exports = {
    createApiPath: (method) => {
        if (!method) {
            return -1; // error
        }

        let query = {
            module: 'proxy',
            action: method,
            apikey: config.apiKey
        };

        return config.baseURL + '?' + queryString.stringify(query);
    }
}
