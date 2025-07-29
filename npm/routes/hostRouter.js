const express = require('express');
const hostRouter = express.Router();
const homeController = require('../controllers/home');

hostRouter.get('/host/home', homeController.home);
hostRouter.post('/host/home', homeController.postHome);


exports.hostRouter = hostRouter;
