const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs'); 
app.set('views', './views'); 

const cors = require('cors');   
app.use(cors());


const cookieParser = require("cookie-parser")
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    
})

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003");
})

