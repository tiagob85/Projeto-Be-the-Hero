const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Sessions
 */
routes.post('/sessions', SessionController.create);

/**
 * Controllers
 */
routes.get('/profile', ProfileController.index);

/**
 * Ongs
 */
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

/**
 * Incidents
 */

 routes.post('/incidents', IncidentController.create);
 routes.get('/incidents', IncidentController.index);
 routes.delete('/incidents/:id', IncidentController.delete);
 

module.exports = routes;
