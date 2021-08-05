"use strict";

const fs = require("fs");

const getNames = (req, res) => {
  fs.readdir(`${__dirname}/../../public/audios`, (err, files) => {
    if (err) throw err;
    res.json(files);
  });
};

module.exports = { getNames };
