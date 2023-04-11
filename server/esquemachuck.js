const { Entity, Schema } = require('redis-om')
const crear_cliente  = require('./clientes.js')



class consulta extends Entity{}

const consultaChuck = new Schema(consulta,{
    query:{type:'string'},
    value:{type:'string'}
})

async function crearEsquema(url){
    const chuckRepositorio = await crear_cliente(url)
    let repositorio = await chuckRepositorio.fetchRepository(consultaChuck)
    repositorio.createIndex();
    return repositorio
}

module.exports = crearEsquema



