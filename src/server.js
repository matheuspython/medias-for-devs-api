const express = require('express');
const cors = require("cors")
const routes = require('./routes')

const port = process.env.PORT || 8878;
const app = express()

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(routes)



app.listen(port, ()=> console.log("server iniciado"))
