import mongoose from 'mongoose';

const NumeroSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  bicho: { type: mongoose.Schema.Types.ObjectId, ref: 'Bicho' }
});

export default mongoose.model('Numero', NumeroSchema);
