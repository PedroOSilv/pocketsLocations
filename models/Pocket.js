const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pocket = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    lider: {
        type: String,
        required: true
    },
    diaDaSemana: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    }
});

mongoose.model("pockets", Pocket);