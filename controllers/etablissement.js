let data = require("../MOCK_DATA.json");

///// Exercice 3

exports.findEtablissement = (req, res) => {
  const { id } = req.params;

  // Récupère les donnée des établissement par ville
  data = data
    .filter((data) => {
      if (data.location === id) {
        return data.toString();
      }
    })
    .map((data) => data.etablissement_type.toString());

  res.send(data);
};

// Supression d'une donnée
exports.deleteData = (req, res) => {
  const { id } = req.params;
  const deleteData = data.filter((data) => data.id !== Number(id));
  res.send(deleteData);
};
