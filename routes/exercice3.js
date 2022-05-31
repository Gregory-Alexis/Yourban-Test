const express = require("express");
const router = express.Router();
const EtablissementCtrl = require("../controllers/exercice3.js");

router.get("/:city", EtablissementCtrl.findByCity);
router.get("/:sector/:city", EtablissementCtrl.findBySectorAndCity);
router.delete("/delete/:city", EtablissementCtrl.deleteAllInCity);
router.delete("/delete/:sector", EtablissementCtrl.deleteAllPerType);

module.exports = router;
