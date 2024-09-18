const mongoose = require('mongoose')
const Bicho = require('./Bicho')


const NumeroSchema = new mongoose.Schema({
    numero:{type: Number , required: true},
    bicho:{type:mongoose.Schema.Types.ObjectId, 'ref': Bicho  }

})

module.exports = mongoose.model('Numero', NumeroSchema)

module.exports = mongoose.model('Numero', NumeroSchema)