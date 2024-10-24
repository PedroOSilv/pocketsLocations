if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://pedroapsilva22:9MCUS4QBVSQa8B5c@pocketslocations.twnqx.mongodb.net/"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/pocketsLocations"}
}