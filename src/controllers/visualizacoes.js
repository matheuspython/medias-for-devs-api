const visualizacoes = {
  visualizacao: 0
}

exports.MostraVisualizacoes = (req, res) => res.json(visualizacoes)



exports.addVisualizacoes = (req, res) => {
  visualizacoes.visualizacao ++
  return res.json(visualizacoes)
}