const mongoose = require('mongoose');

const ApostaSchema = new mongoose.Schema({
  valor: { type: Number, required: true },
  retorno: { type: Number, default: undefined },
  numeros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Numero' }],
  chavePix: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  jogo: { type: mongoose.Schema.Types.ObjectId, ref: 'Jogo' }
});

module.exports = mongoose.model('Aposta', ApostaSchema);
