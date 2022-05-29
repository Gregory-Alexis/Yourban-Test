const express = require("express");
const router = express.Router();
const EtablissementCtrl = require("../controllers/etablissement.js");

router.get("/city/:id", EtablissementCtrl.findEtablissement);
//router.get("/location/:id", EtablissementCtrl);
//router.get("/typeincity/:id", EtablissementCtrl);

module.exports = router;
