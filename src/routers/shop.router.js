const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop.controller");

router.post("/received", shopController.received);
router.get("/received", shopController.answer);
router.get("/", shopController.index);

module.exports = router;
