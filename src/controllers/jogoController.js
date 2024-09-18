const jogoService = require('../services/jogoService');

exports.resolverJogo = async(req,res) => {
    try{
    await jogoService.resolverJogo (req.params.jogoId)
    res.status(200).json({message: "Jogo resolvido com sucesso"})

} catch(error){
    res.status(500).json({error: error.message})
}

}


