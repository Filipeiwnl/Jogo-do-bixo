const Jogo = require('../models/Jogo')
const Bicho = require('../models/Bicho')
const Numero = require('../models/Numero')
const Aposta = require('../models/Aposta')

const ResolverJogo = async(jogoId) => {
    const jogo = await jogo.findById(jogoId).populate('numeroEscolhido')
    if(!jogo){
        throw new Error("Jogo não encontrado");

    }
    const numerosGerados = gerarNumerosAleatorios()
    jogo.vencedores = await Numero.find({numero: {$in: numerosGerados}})

    await jogo.save()

    await calcularPremios(jogo)

}   


const gerarNumerosAleatorios = () => {
    const numeros = new Set()
    while(numeros.size < 3){
        numeros.add(Math.floor(Math.random() * 100)+1)
    }
    return Array.from(numeros)

}


const calcularPremios = async(Jogo) => {

    const apostas = await Aposta.find({jogo: jogo._id}).populate('numeros')

    apostas.forEach(aposta => {
        const vencedores = aposta.filter(numero=> Jogo.vencedores.includes(numero._id))
        if(vencedores.length > 0 ){
            const premio =  calcularPremios(aposta.valor, vencedores.length)
            aposta.retorno = premio
            aposta.save()
        }


    })
}

function calcularValorPremio(valorAposta, quantidadeVencedores) {
    return valorAposta * 10 * quantidadeVencedores;
  }

  module.exports = { resolverJogo };