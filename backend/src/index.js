const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Metodos http:
 * GET: Buscar informações do backend;
 * POST: Criar informações no backend;
 * PUT: Alterar informações no backend;
 * DELETE: Apaga informações no backend;
*/
/**
 * Npm start
 */
/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos o simbolo de interrogação "?"(filtros, paginação).
 * Route Params: Parametros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

app.listen(3333);