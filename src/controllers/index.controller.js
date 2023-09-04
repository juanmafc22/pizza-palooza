const path = require("path");

const indexController = {
  index: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  },

  contacto: (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/contacto.html"));
  }
};

module.exports = indexController;
