const data = require("../MOCK_DATA.json");

///// Exercice 3

exports.findEtablissementByCity = (req, res) => {
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
  } catch (err) {
    res.status(400).json({ error });
  }
};

exports.findEtablissementBySectorAndCity = (req, res) => {
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
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supression de tout les établissement d'une ville
exports.deleteAllEtablissementInCity = (req, res) => {
  const { id } = req.params;
  try {
    const deleteData = data.filter((data) => data.location !== id);
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Supression de tout les établissement d'un secteur d'activité
exports.deleteAllEtablissementPerType = (req, res) => {
  const { id } = req.params;
  try {
    const deleteData = data.filter((data) => data.etablissement_type !== id);
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(400).json({ error });
  }
};
