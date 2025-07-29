const express = require('express');
const userRouter = express.Router();
const homeController = require('../controllers/home');
userRouter.get('/', homeController.get);
module.exports= userRouter;