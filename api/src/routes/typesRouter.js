const { Router } = require('express');
const {getTypesPokemons} = require('../handlers/typesHandler.js');
const typesRouter = Router();

typesRouter.get("/", getTypesPokemons);

module.exports = typesRouter;