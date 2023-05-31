const { getAllTypes } = require("../controllers/typesControllers");

const getTypesPokemons = async (req, res) => {
  try {
    const allTypes = await getAllTypes();
    res.status(200).json(allTypes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getTypesPokemons };
