const express = require("express");
const router = express.Router();
const EtablissementCtrl = require("../controllers/exercice3.js");

router.get("/city/:id", EtablissementCtrl.findByCity);
router.get("/:sector/:city", EtablissementCtrl.findBySectorAndCity);
router.delete("/delete/city/:id", EtablissementCtrl.deleteAllInCity);
router.delete("/delete/sector/:id", EtablissementCtrl.deleteAllPerType);

module.exports = router;
