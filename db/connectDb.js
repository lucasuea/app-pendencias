const mysql = require('mysql2/promise');


//CONFIGURAR O ARQUIVO .ENV

const path = require('path'); // Importe o módulo 'path' do Node.js

// Construa o caminho absoluto para o arquivo .env no diretório desejado
const envPath = path.resolve(__dirname, '..', '.env');

// Carregue o arquivo de configuração do dotenv a partir do caminho absoluto
require('dotenv').config({ path: envPath });


console.log(process.env.PASSWD);


const dataConfig = {
    connectionLimit : process.env.POOL,
    host : process.env.HOST, ///ip da máquina local onde roda o mysql (nao pode ser do container)
    user : process.env.USER,
    password : process.env.PASSWD,
    // password : "q1w2e3r4#",
    database : process.env.DB,
    port: process.env.PORT
} 


const conn = async ()=>{
    try{
        // create the connection
        const pool = await mysql.createPool(dataConfig)
        return pool;    
    }catch(error){
        console.log(error);
    }
}

(async()=>{
    const con = await conn();

    try {
        rows = await con.query('SHOW TABLES;');

        if(rows.length == 0){
            console.log("Não há tabelas");
            return false;
        }

        console.log("Tabelas: ");   
        console.log(rows);
        return rows;

    } catch (error) {
        console.log(error);
    }
})()



module.exports = {
    conn
}


