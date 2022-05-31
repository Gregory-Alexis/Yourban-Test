const express = require("express");
const router = express.Router();
const CommerceCtrl = require("../controllers/exercice2.js");

router.get("/secteur/:activity", CommerceCtrl.findCommerceByActivity);
router.get("/location/:city", CommerceCtrl.findCommerceByCity);
router.get("/:sector/:city", CommerceCtrl.findCommerceActivityInCity);

module.exports = router;
