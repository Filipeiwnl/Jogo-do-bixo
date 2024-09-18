const mongoose = require('mongoose')

const jogoSchema =  new mongoose.Schema({
        numeroEscolhido:[{type: mongoose.Schema.Types.ObjectId,ref:"Numero"}],
        vencedores: [{ type: mongoose.Schema.Types.ObjectId,ref:"Numero"}],
        dataInicio:[{type: Date, required: true}],
        dataFim:[{type: Date, required: true}]

})

module.exports = mongoose.model('Jogo', jogoSchema)