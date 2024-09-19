import mongoose from 'mongoose';

const JogoSchema = new mongoose.Schema({
  numeroEscolhido: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Numero' }],
  vencedores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Numero' }],
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true }
});

export default mongoose.model('Jogo', JogoSchema);
