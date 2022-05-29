const data = require("../MOCK_DATA.json");

///// Exercice 3

exports.findEtablissementByCity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par ville
  try {
    const newData = data
      .filter((data) => {
        if (data.location.toLocaleLowerCase() === id) {
          return data.toString();
        }
      })
      .map((data) => data.etablissement.toString());
    res.send(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

    res.send(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supression d'une donnée
exports.deleteData = (req, res) => {
  const { id } = req.params;
  const deleteData = data.filter((data) => data.id !== Number(id));
  res.send(deleteData);
};
