const express = require("express");
const router = express.Router();
const CommerceCtrl = require("../controllers/exercice2.js");

router.get("/secteur/:id", CommerceCtrl.findCommerceByActivity);
router.get("/location/:id", CommerceCtrl.findCommerceByCity);
//router.get("/typeincity/:id", CommerceCtrl.findCommerceActivityInCity);

module.exports = router;