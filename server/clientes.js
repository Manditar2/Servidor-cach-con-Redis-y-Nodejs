const { Client } = require('redis-om')

async function crear_cliente(url){
    const cliente_1 = await new Client().open(url)
    return cliente_1
}

module.exports = crear_cliente;