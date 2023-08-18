const path = require("path");

const shopController = {
  index: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/shop/index.html"));
  },

  pizza: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/shop/pizza.html"));
  },

  // get request to redirect from the form
  answer: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/shop/received.html"));
  },

  // post request to capture the data from the form
  received: (req, res, next) => {
    const product = req.body.productItem;
    console.log(product);
    res.redirect("/shop/received");
  },
};

module.exports = shopController;
