const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { where } = require("sequelize");

const getApiInfo = async (name) => {
  if (!name) {
    const apiData = (
      await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
    ).data;
    //const data = apiData;
    //console.log("api: ", data);
    const url = await Promise.all(
      apiData.results.map(async (result) => {
        const response = (await axios.get(result.url)).data;
        //const data = response;
        //console.log("data: ",data);

        return {
          id: response.id,
          name: response.name,
          image: response.sprites.other["dream_world"].front_default,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defense: response.stats[2].base_stat,
          speed: response.stats[5].base_stat,
          height: response.height,
          weight: response.weight,
          types: response.types.map((typ) => typ.type.name),
          
        };
      })
    );
    //console.log(url);
    return url;
  } else {
    const all = await getAllPokemons();
    const pokeName = all.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
      
    );
    return pokeName;
  }
};

const getDbInfo = async (name) => {
  if (name) {
    const nameLow = name.toLowerCase();
    const allPokemon = await Pokemon.findAll({
      include: {
        model: Type, 
        attributes: ["name"], 
        through: {
          attributes: [],
          },    
      }
      
    });
    const pokemons = allPokemon.map((p) => {
      p.name.includes(nameLow)
     
      
    });
    return pokemons;
  } else {
    const allPokemons = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
          },
      }

    });

    return allPokemons;
    
  }
};

const getAllPokemons = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  //const allPoke= [... apiInfo, ... dbInfo];
  const allPoke = [...new Set(apiInfo.concat(dbInfo))];
  return allPoke;
};

const createPokemon = async ({
  name,
  types,
  imagen,
  attack,
  weight,
  height,
  hp,
  speed,
  defense,
  InDb
}) => {
  const nameL = name.toString().toLowerCase();
  const typesLower = types?.map((type) => type.toLowerCase());
  const newPokemon = await Pokemon.create({
    name:nameL,
    types,
    imagen,
    attack,
    weight,
    height,
    hp,
    speed,
    defense,
    InDb,
  });
  const TypesDb = await Type.findAll({
    //En esta variable esperamos por el modelo Type a que encuentre
    //un registro donde el nombre es igual al nombre de type
    where: { name: typesLower }, //type
  });
  newPokemon.addType(TypesDb);
  const newP = await Pokemon.findOne({
    ///*** Me va a mostrar el pokemon que cree
    where: { name: nameL },
    include: [
      {
        model: Type,
        attributes: ['name'],
      },
    ],
  });
  
  return newP;
};

const pokeById = async (id, source) => {
  //  const pokemonId = source ==="api"
  //  ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
  //  : await Pokemon.findByPk(id);
  //  console.log(pokemonId);
  //return pokemonId;
  if (source === "api") {
    const pokemonId = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    ).data;
    return {
      id: pokemonId.id,
      name: pokemonId.name,
      img: pokemonId.sprites.other["dream_world"].front_default,
      hp: pokemonId.stats[0].base_stat,
      attack: pokemonId.stats[1].base_stat,
      defense: pokemonId.stats[2].base_stat,
      speed: pokemonId.stats[5].base_stat,
      height: pokemonId.height,
      weight: pokemonId.weight,
      types: pokemonId.types.map((typ) => typ.type.name),
    };
  } else {
    const pokemonId = await Pokemon.findByPk(
      id, 
      {
        
      include: 
        {
          model: Type,
            attributes: ['name'],
            through: {
              attributes: [],
              },
          }
      
    }
  
);
    return pokemonId;
  }
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllPokemons,
  createPokemon,
  pokeById,
};
