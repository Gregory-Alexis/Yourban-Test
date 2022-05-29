let data = require("../MOCK_DATA.json");

// Créer une nouvelle donnée
exports.createData = (req, res) => {
  const createData = req.body;
  data.push(createData);
  res.send(
    `Le nouvelle établissement ${createData.etablissement} a bien été créé`
  );
};

// Récupère les données
exports.getData = (req, res) => {
  res.send(data);
};

exports.findData = (req, res) => {
  const { id } = req.params;
  /* 
  la consigne demandait de recupérer un élément par son nom, j'ai supposé que c'était le nom de l'établissement

  Etant donné que le nom des établissements était composé de plusieurs mots, pour faciliter la recherche, 
  j'ai supprimé les "espaces", ",Inc." et mis le tout en minuscule 
  */
  const findData = data.find(
    (data) =>
      data.etablissement
        .split(" ")
        .join("")
        .replace(",Inc.", "")
        .toLowerCase() === id
  );

  /*
   Pour récupérer les éléments par leur id, j'aurai procédé comme ceci
   const findData = data.find((data) => data.id === Number(id));
 */
  res.send(findData);
};

// Supression d'une donnée
exports.deleteData = (req, res) => {
  const { id } = req.params;
  const deleteData = data.filter((data) => data.id !== Number(id));
  res.send(deleteData);
};

// Mettre à jour une donnée
exports.updateSingleData = (req, res) => {
  const { id } = req.params;
  const updateData = data.find((data) => data.id === Number(id));
  const { etablissement_type, etablissement, location, address, mail } =
    req.body;

  // J'utilise la méthode PATCH pour mettre à jour un élément en particulier
  if (etablissement_type) updateData.etablissement_type = etablissement_type;
  if (etablissement) updateData.etablissement = etablissement;
  if (location) updateData.location = location;
  if (address) updateData.address = address;
  if (mail) updateData.mail = mail;

  res.send(updateData);
};
