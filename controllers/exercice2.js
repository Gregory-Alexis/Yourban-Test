let data = require("../MOCK_DATA.json");

///// Exercice 2

exports.findCommerceByActivity = (req, res) => {
  const { id } = req.params;

  // Récupère la somme de tous les commerces d’un secteur d’activité donné
  try {
    const newData = data.filter(
      (data) => data.etablissement_type.toLowerCase() === id.toLowerCase()
    );

    res
      .status(200)
      .json(`Il y a ${newData.length} établissement dans le secteur ${id}`);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.findCommerceByCity = (req, res) => {
  const { id } = req.params;

  // Récupère la somme de tous les commerces d’une ville donnée
  try {
    const newData = data.filter(
      (data) => data.location.toLowerCase() === id.toLowerCase()
    );
    // le récupère le nombre de commerce dans une ville donnée
    res.status(200).json(`Il y a ${newData.length} commerces situé à ${id}`);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.findCommerceActivityInCity = (req, res) => {
  // Récupère la somme de tous les commerces d’un secteur d’activité dans une ville donnée
  const { sector, city } = req.params;
  try {
    const newData = data
      .filter((data) => {
        if (
          data.etablissement_type.toLowerCase() === sector.toLowerCase() &&
          data.location.toLowerCase() === city.toLowerCase()
        ) {
          return data.etablissement_type;
        }
      })
      .map((data) => data);

    res
      .status(200)
      .json(
        `A ${city} il y a ${newData.length} commerce dans le secteur d'activité ${sector}`
      );
  } catch (error) {
    res.status(400).json({ error });
  }
};
