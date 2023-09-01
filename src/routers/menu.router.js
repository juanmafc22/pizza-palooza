const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menu.controller");

router.post("/received", menuController.received);
router.get("/received", menuController.answer);
router.get("/", menuController.index);
router.get("/pizza", menuController.pizza);
router.get("/checkout", menuController.checkout);

module.exports = router;
