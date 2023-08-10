const path = require("path");

const adminController = {

  index: (req, res, next) => {

    res.sendFile(path.join(__dirname, "../views/admin/index.html"));
  },
};

module.exports = adminController;
