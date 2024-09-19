import express from 'express';
import connectDB from './config/db.js';
import jogoRoutes from './routes/jogoRoutes.js';
import dotenv from 'dotenv';

// Configurar dotenv
dotenv.config();

const app = express();
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Usar as rotas
app.use('/api/jogo', jogoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
