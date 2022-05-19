const express = require('express');

const {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch} = require("./launchers.controller");


const launchersRouter = express.Router();

launchersRouter.get('/', httpGetAllLaunches);
launchersRouter.post('/', httpAddNewLaunch);
launchersRouter.delete('/:id', httpAbortLaunch);

module.exports = launchersRouter;