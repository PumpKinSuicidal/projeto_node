/**
 * Modelo de dados para construção das coleções("tabelas")
 * Clientes
 */

// importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose')

// criação da estrutura da coleção Clientes
const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },    
    cpfCliente: {
        type: String,
        unique: true,
        index: true
    },
    ModeloCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    PlacaCliente: {
        type: String        
    },
    TipoCliente: {
        type: String  
    },
    DanosCliente: {
        type: String  
    },
    CorCliente: {
        type: String  
    }
}, {versionKey: false}) //não versionar os dados armazenados

// exportar para o main o modelo de dados
// OBS: Clientes será o nome da coleção
module.exports = model('Clientes', clienteSchema)