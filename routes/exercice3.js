const express = require("express");
const router = express.Router();
const EtablissementCtrl = require("../controllers/exercice3.js");

router.get("/city/:id", EtablissementCtrl.findEtablissementByCity);
router.get(
  "/:sector/:city",
  EtablissementCtrl.findEtablissementBySectorAndCity
);
//router.get("/typeincity/:id", EtablissementCtrl);

module.exports = router;
