let data = require("../MOCK_DATA.json");

///// Exercice 2

exports.findCommerceByActivity = (req, res) => {
  const { id } = req.params;

  // Récupère la somme de tous les commerces d’un secteur d’activité donné
  try {
    data = data.filter((data) => data.etablissement_type.toLowerCase() === id);

    res.status(200).json(data.length);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.findCommerceByCity = (req, res) => {
  const { id } = req.params;

  // Récupère la somme de tous les commerces d’une ville donnée
  try {
    data = data.filter((data) => data.location.toLowerCase() === id);
    // le récupère le nombre de commerce dans une ville donnée
    res.status(200).json(data.length);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.findCommerceActivityInCity = (req, res) => {
  // Récupère la somme de tous les commerces d’un secteur d’activité dans une ville donnée
  const { sector, city } = req.params;
  try {
    data = data
      .filter((data) => {
        if (
          data.etablissement_type.toLowerCase() === sector.toLowerCase() &&
          data.location.toLowerCase() === city.toLowerCase()
        ) {
          return data.etablissement_type;
        }
      })
      .map((data) => data);

    res.status(200).json(data.length);
  } catch (error) {
    res.status(400).json({ error });
  }
};
