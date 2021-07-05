"use strict";

// const db = require("../../config/db");

const view = {
  home: (req, res) => {
    res.render("home/index");
  },
};

module.exports = { view };
