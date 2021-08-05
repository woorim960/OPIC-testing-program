"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
const audio = require("./audio.ctrl");

// View Rendering
router.get("/", ctrl.view.home);

// API
router.get("/api/audios", audio.getNames);

module.exports = router;
