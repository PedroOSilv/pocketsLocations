//Carregando modulos

const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const principal = require("./routes/principal");
const mongoose = require("mongoose");

//Configurações
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //Handlebars
        app.engine("handlebars", handlebars.engine({defaultLayout: "main"}));
        app.set("view engine", "handlebars");
    //Mongoose

        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/pocketsLocations").then(() => {
            console.log("Conectado ao mongo");
        }).catch((err) => {
            console.log("Erro ao se conectar: " + err);
        });
    //Public
        app.use(express.static(path.join(__dirname, "/public")));
    
//Rotas
    app.use("/", principal);

//Outros
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor rodando!");
});