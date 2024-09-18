const express = require('express');
const connectDB = require('./config/db');
const jogoRoutes = require('./routes/jogoRoutes');

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
