const express = require("express")
const  likeControler  = require("./controllers/likesControler")
const visualizacaoControler = require('./controllers/visualizacoes')
const comentariosControler = require("./controllers/comentariosControllers")

const route = express.Router()

//rotas dos likes
route.get('/likes',likeControler.MostraLikes)
route.post('/likes', likeControler.addLike)


//rotas das visualizacoes
route.get('/visualizacoes', visualizacaoControler.MostraVisualizacoes)
route.post('/visualizacoes',visualizacaoControler.addVisualizacoes)

//rotas dos comentarios
route.get("/comentarios",comentariosControler.MostraComentario)
route.post("/comentarios",comentariosControler.addComentario)


module.exports = route;


/**
 * like
 * viws
 * coments
 */