const express = require('express');

const app = express();

const envConfig = require("./config/envConfig");
envConfig();
const bodyParserConfig = require("./config/body-parser");
bodyParserConfig(app);

const cookieParserConfig = require("./config/cookies");
cookieParserConfig(app);

const corsConfig = require("./config/cors");
corsConfig(app);

const ejsConfig = require("./config/ejs");
ejsConfig(app);

const publicPathConfig = require("./config/publicPath");
publicPathConfig(app, express);

//escrever o código para usar o express router e user o jwt para a autenticação


app.get('/', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {

})



app.listen(process.env.PORT_APP, ()=>{
    console.log("Servidor rodando na porta " + process.env.PORT_APP);
})

