const express = require('express')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const yaml = require('yaml');
const path = require('path');
const  crearEsquema = require('./esquemachuck.js')

const url_1 = process.env.REDIS_URL_1
const port = process.env.PORT || 3000;

require('dotenv').config()  

let esquemaChuck

async function crearIndexar(){
  const esquema = await crearEsquema(url_1)
  esquemaChuck = esquema
}
crearIndexar()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// RUTAS // 

const ruta_principal = path.join(__dirname, '..','index.html')

app.get('/',function(req,res){
  res.sendFile(ruta_principal)
})

app.post('/buscar',function(req,res){

})

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
    console.log(process.env['REDIS_URL_1'])
    console.log(esquemaChuck)
  });
  