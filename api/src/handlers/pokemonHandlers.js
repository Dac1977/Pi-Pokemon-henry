const { getAllPokemons, createPokemon, pokeById, getDbInfo, getApiInfo } = require('../controllers/pokemonControllers');

// const getPokemonsHandler = async (req, res) => {
//     const {name} = req.query;
//     try{
//     if(name) {
//       const getByName = getApiInfo(name);
//       console.log(getByName);
//       res.status(200).json(getByName);
//     }
//     else {
//       const getAllPokemons = await getApiInfo();
//       //console.log(getAllPokemons);
//       res.status(200).json(getAllPokemons);
//     }
//   }catch(error){
//     res.status(400).json({message:error.message});
//   }
//       //     res.status(404).json({message: error.message});
//       // }
//     //     res.status(200).json(getAllPokemons);
//     // try{
//     //     const getAllPokemons = await getApiInfo();
//     //     res.status(200).json(getAllPokemons);
//     // } catch(error){
//     //     res.status(404).json({message: error.message});
//     // }
// };



const getPokemonHandler = async (req, res) => {
  const { name } = req.query;
  if(name) {
  const getByName = await getDbInfo(name);
  const getApiByName = await getApiInfo(name);
  const allname = [...getApiByName, ...getByName ];
  allname.filter((value, index) => allname.indexOf(value) === index);
  res.status(200).json(allname.filter(Boolean));
  }else {
    const allPokemons = await getAllPokemons();
    res.status(200).json(allPokemons.filter(Boolean));
  }
};

const getPokemonsHandlerById = async (req, res) =>{
    try{
    const {id} = req.params;
    const source = isNaN(id) ?"bdd" : "api";
    const getById = await pokeById(id, source);
      //console.log(getById);
      res.status(200).json(getById);
    }catch(error){
        res.status(400).json({message:error.message});
    }


};

const createPokemonHandler = async (req, res) => {
  try {
    const {
      name,
      types,
      imagen,
      attack,
      weight,
      height,
      hp,
      speed,
      defense,
      createdInDb,
    } = req.body;
    const newPokemon = await createPokemon({
      name,
      types,
      imagen,
      attack,
      weight,
      height,
      hp,
      speed,
      defense,
      createdInDb,
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getPokemonHandler,
    getPokemonsHandlerById,
    createPokemonHandler,
}