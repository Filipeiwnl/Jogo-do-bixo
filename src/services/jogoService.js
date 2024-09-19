import Jogo from '../models/Jogo.js';
import Aposta from '../models/Aposta.js';
import Numero from '../models/Numero.js';

export async function resolverJogo(jogoId) {
  const jogo = await Jogo.findById(jogoId).populate('numeroEscolhido');

  if (!jogo) {
    throw new Error('Jogo não encontrado');
  }

  // Gerar números aleatórios
  const numerosGerados = gerarNumerosAleatorios();
  jogo.vencedores = await Numero.find({ numero: { $in: numerosGerados } });

  await jogo.save();

  // Calcular prêmios para apostas vencedoras
  await calcularPremios(jogo);
}

function gerarNumerosAleatorios() {
  const numeros = new Set();
  while (numeros.size < 3) { // Exemplo: gerar 3 números
    numeros.add(Math.floor(Math.random() * 100) + 1); // Números de 1 a 100
  }
  return Array.from(numeros);
}

async function calcularPremios(jogo) {
  const apostas = await Aposta.find({ jogo: jogo._id }).populate('numeros');

  apostas.forEach(aposta => {
    const vencedores = aposta.numeros.filter(numero => jogo.vencedores.includes(numero._id));
    if (vencedores.length > 0) {
      const premio = calcularValorPremio(aposta.valor, vencedores.length); // Lógica para calcular o prêmio
      aposta.retorno = premio;
      aposta.save();
    }
  });
}

function calcularValorPremio(valorAposta, quantidadeVencedores) {
  // Exemplo: prêmio é 10 vezes o valor da aposta por número vencedor
  return valorAposta * 10 * quantidadeVencedores;
}
