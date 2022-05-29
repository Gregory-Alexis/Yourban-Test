const express = require("express");
const router = express.Router();
const dataCtrl = require("../controllers/exercice1.js");

router.get("/", dataCtrl.getData);
router.post("/", dataCtrl.createData);
router.get("/:id", dataCtrl.findData);
router.delete("/:id", dataCtrl.deleteData);
router.patch("/:id", dataCtrl.updateSingleData);

module.exports = router;
