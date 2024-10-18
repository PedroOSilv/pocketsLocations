const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Pocket");
const Pocket = mongoose.model("pockets");

// router.get("/", (req, res) => {
//   res.render("principal/index");
// });

router.get("/", (req, res) => {
    Pocket.find().then((pockets) => {
        res.render("principal/pockets", {pockets: pockets});
    }).catch((err) => {
        console.log("Erro ao listar pockets: " + err);
        res.redirect("/");
    });
});

router.get("/addpockets", (req, res) => {
    res.render("principal/addpockets");
});


router.post("/novo", (req, res) => {
    const novoPocket = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        lider: req.body.lider,
        diaDaSemana: req.body.diaDaSemana,
        horario: req.body.horario,
        instagram: req.body.instagram
    };

    new Pocket(novoPocket).save().then(() => {
        console.log("Pocket salvo com sucesso!");
    }).catch((err) => {
        console.log("Erro ao salvar pocket: " + err);
    });

    res.redirect("/");
});

module.exports = router;