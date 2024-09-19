import mongoose from 'mongoose';

const BichoSchema = new mongoose.Schema({
  nome: { type: String, required: true }
});

export default mongoose.model('Bicho', BichoSchema);
