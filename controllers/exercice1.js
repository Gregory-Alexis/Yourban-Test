let data = require("../MOCK_DATA.json");

///// Exercice 1

// Créer une nouvelle donnée
exports.createData = (req, res) => {
  const createData = req.body;
  try {
    data.push(createData);
    res.status(200).json({
      message: `Le nouvelle établissement ${createData.etablissement} a bien été créé`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupère toute les données
exports.getData = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findData = (req, res) => {
  const { id } = req.params;
  try {
    // la consigne demandait de recupérer un élément par son nom, j'ai supposé que c'était le nom de l'établissement

    const newData = data.find(
      (data) => data.etablissement.toLowerCase() === id.toLowerCase()
    );
    /*
   Pour récupérer les éléments par leur id, j'aurai procédé comme ceci:
   const findData = data.find((data) => data.id === Number(id));
 */
    if (!newData) {
      return res.status(404).json({
        message: `Pas d'établissement correspondant à ${id}, veuillez vérifier l'ortographe`,
      });
    }

    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supression d'une donnée
exports.deleteData = (req, res) => {
  const { id } = req.params;
  try {
    data = data.filter((data) => data.id !== Number(id));

    if (!Number(id)) {
      return res.status(404).json({
        message: `Aucun établissement correspondant à l'id ${id}`,
      });
    }

    res.status(200).json({ message: "Donnée supprimé" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour une donnée
exports.updateSingleData = (req, res) => {
  const { id } = req.params;
  const { etablissement_type, etablissement, location, address, mail } =
    req.body;
  try {
    const updateData = data.find((data) => data.id === Number(id));

    // J'utilise la méthode PATCH pour mettre à jour un élément en particulier
    if (etablissement_type) updateData.etablissement_type = etablissement_type;
    if (etablissement) updateData.etablissement = etablissement;
    if (location) updateData.location = location;
    if (address) updateData.address = address;
    if (mail) updateData.mail = mail;

    res.status(200).json({ message: "Donné mise à jour" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
