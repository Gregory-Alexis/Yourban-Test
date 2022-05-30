let data = require("../MOCK_DATA.json");

///// Exercice 3

exports.findByCity = (req, res) => {
  const { id } = req.params;
  // Récupère les donnée des établissement par ville
  try {
    const newData = data
      .filter((data) => {
        if (data.location.toLocaleLowerCase() === id) {
          return data;
        }
      })
      .map((data) => data.etablissement);
    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.findBySectorAndCity = (req, res) => {
  // Récupère les donnée des établissement par secteur et ville
  const { sector, city } = req.params;
  try {
    const newData = data
      .filter((data) => {
        if (
          data.etablissement_type.toLowerCase() === sector.toLowerCase() &&
          data.location.toLowerCase() === city.toLowerCase()
        ) {
          return data.etablissement;
        }
      })
      .map((data) => data);

    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Supression de tout les établissements d’une ville

exports.deleteAllInCity = (req, res) => {
  const { id } = req.params;
  try {
    const newData = data.filter((data) => data.location !== id);
    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json({ error });
  }
};
// Supression de tout les établissements d’un secteur d’activité
exports.deleteAllPerType = (req, res) => {
  const { id } = req.params;
  try {
    const newData = data.filter((data) => data.etablissement_type !== id);
    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json({ error });
  }
};
