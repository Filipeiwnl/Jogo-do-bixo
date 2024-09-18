const mongoose = require('mongoose')

const BichoSchema = new mongoose.Schema({
    nome:{type: String , required: true}

})

module.exports = mongoose.model('Bicho', BichoSchema)