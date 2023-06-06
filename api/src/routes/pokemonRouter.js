const { Router } = require("express");
const {
  getPokemonHandler,
  getPokemonsHandlerById,
  createPokemonHandler,
} = require("../handlers/pokemonHandlers.js");
const pokemonRouter = Router();

const validate = async (req, res, next) => {
  const { name, types, imagen, attack, weight, height, hp, speed, defense } =
    req.body;
  if (!name) return res.status(400).json({ error: "name is required" });
  if (!types) return res.status(400).json({ error: "types is required" });
  if (!imagen) return res.status(400).json({ error: "imagen is required" });
  if (!attack) return res.status(400).json({ error: "attack is required" });
  if (!weight) return res.status(400).json({ error: "weight is required" });
  if (!height) return res.status(400).json({ error: "height is required" });
  if (!hp) return res.status(400).json({ error: "hp is required" });
  if (!speed) return res.status(400).json({ error: "speed is required" });
  if (!defense) return res.status(400).json({ error: "defense is required" });

  next();
};

pokemonRouter.get("/", getPokemonHandler);
pokemonRouter.get("/pokemons", getPokemonHandler); //esto cambie hoy
pokemonRouter.get("/:id", getPokemonsHandlerById);
pokemonRouter.post("/", validate, createPokemonHandler);
// pokemonRouter.get('/:idPokemon',(req, res) => {
//     try{
//         res.status(200).json("estamos en idPokemons");
//     } catch(error){
//         res.status(404).json({message: error.message});
//     }
// });
// pokemonRouter.post('/',(req, res) => {
//     try{
//     res.status(200).json("estamos en post");
//     } catch(error){
//         res.status(404).json({message: error.message});
//     }
// });

module.exports = pokemonRouter;
