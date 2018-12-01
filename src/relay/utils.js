const queryString = require('querystring');
const config = require('../config/app.config');

module.exports = {
    createApiPath: (action, params) => {
        if (!action) {
            return -1; // error
        }

        let query = {
            module: 'proxy',
            action: action,
            apikey: config.apiKey,
        };
        
        // add params into query
        if(params){
            query = Object.assign(query, params);
        }

        return config.baseURL + '?' + queryString.stringify(query);
    },
    toHex: (num) => {
        // convert num to hex
        return num;
    } 
}
