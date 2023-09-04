const path = require("path");

const menuController = {
  index: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/menu/index.html"));
  },

  pizza: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/menu/pizza.html"));
  },

  // get request to redirect from the form
  answer: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/menu/received.html"));
  },

  // post request to capture the data from the form
  received: (req, res, next) => {
    const product = req.body.productItem;
    console.log(product);
    res.redirect("/menu/received");
  },

  // get request the checkout page
  checkout: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/menu/checkout.html"));
  },

  // Add a new method for the category route
  category: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/menu/category.html"));
  }
};

module.exports = menuController;
