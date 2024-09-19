import Jogo from '../models/Jogo.js';

export const criarJogo = async (req, res) => {
  try {
    const { dataInicio, dataFim, numeroEscolhido } = req.body;
    const novoJogo = new Jogo({ dataInicio, dataFim, numeroEscolhido });
    await novoJogo.save();
    res.status(201).json(novoJogo); // Resposta com o jogo criado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const resolverJogo = async (req, res) => {
  // Implementação da função de resolver jogo
};
