let data = require("../MOCK_DATA.json");

///// Exercice 2

exports.findCommerceByActivity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissements par type
  try {
    const findCommerceByActivity = data.filter(
      (data) => data.etablissement_type.toLowerCase() === id
    );
    // le récupère le nombre de type de commerce dans un secteur d'activité
    res.status(200).json(findCommerceByActivity.length);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

exports.findCommerceByCity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par ville
  try {
    const findCommerceByCity = data.filter(
      (data) => data.location.toLowerCase() === id
    );
    // le récupère le nombre de commerce dans une ville donnée
    res.status(200).json(findCommerceByCity.length);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

/*exports.findCommerceActivityInCity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par ville
  const findCommerceActivityInCity = data.filter(
    (data) => id && data.etablissement_type.toLowerCase().includes(id)
  );

  res.send(findCommerceActivityInCity);
};*/
