"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// View Rendering
router.get("/", ctrl.view.home);

module.exports = router;
