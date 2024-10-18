const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("principal/index");
});

router.get("/pockets", (req, res) => {
    res.send("Página de pockets");
});

module.exports = router;