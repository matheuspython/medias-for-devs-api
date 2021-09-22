const comentarios = []

exports.MostraComentario = (req, res) => res.json(comentarios)


exports.addComentario = (req, res) => {
  const {comentario} = req.body;
  const novoComentario = {comentario}
  comentarios.push(novoComentario)
  return res.json(novoComentario)
}