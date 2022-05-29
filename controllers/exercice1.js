let data = require("../MOCK_DATA.json");

exports.findCommerceByActivity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par type
  const findCommerceByActivity = data.filter(
    (data) => data.etablissement_type.toLowerCase() === id
  );

  res.send(
    `Il y a ${findCommerceByActivity.length} établissement de type ${id}`
  );
};

exports.findCommerceByCity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par ville
  const findCommerceByCity = data.filter(
    (data) => data.location.toLowerCase() === id
  );

  res.send(`Il y a ${findCommerceByCity.length} établissement situé à ${id}`);
};

/*exports.findCommerceActivityInCity = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par ville
  const findCommerceActivityInCity = data.filter(
    (data) => id && data.etablissement_type.toLowerCase().includes(id)
  );

  res.send(findCommerceActivityInCity);
};*/
