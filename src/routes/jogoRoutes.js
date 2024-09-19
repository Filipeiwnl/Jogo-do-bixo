import express from 'express';
import { criarJogo, resolverJogo } from '../controllers/jogoController.js';

const router = express.Router();

// Rota para criar um jogo
router.post('/', criarJogo); // Certifique-se de que a função `criarJogo` está implementada

// Rota para resolver um jogo
router.post('/resolver/:jogoId', resolverJogo);

export default router;
