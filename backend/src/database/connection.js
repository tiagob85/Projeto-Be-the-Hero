const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);//escolher a conexão no arquivo.

module.exports = connection;
