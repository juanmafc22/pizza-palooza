const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menu.controller");

// The order of the routes is important. The first one that matches the request will be executed.
router.post("/received", menuController.received);
router.get("/received", menuController.answer);

// Change the route for /pizza later on, 'pizza' is way too generic,
// ideally it should be the name of the product: pizza, empanadas or postre
router.get("/pizza", menuController.pizza);
router.get("/checkout", menuController.checkout);

// Add a new route for empanadas/pizzas/postres (plural)
// this will be the generic route for all the products in the same category: 
// empanadas, pizzas or postres
router.get("/category/", menuController.category);

// The route for the shopping cart
router.get("/cart", menuController.cart);

// The / route is the same as /menu
router.get("/", menuController.index);
router.get("/menu", menuController.index);



module.exports = router;
