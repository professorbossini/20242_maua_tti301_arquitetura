require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())
const { PORT } = process.env
const palavraChave = 'importante'

const funcoes = {
  ObservacaoCriada: (observacao) => {
    observacao.status = observacao.texto.includes(palavraChave) ? 'importante' : 'comum'
    axios.post('http://localhost:10000/eventos', {
      type: 'ObservacaoClassificada',
      payload: observacao
    })
  }
}


app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.type](evento.payload)
  }
  catch(err){}
  res.json({msg: 'ok'})
})

app.listen(PORT, () => console.log(`Classificação. Porta: ${PORT}.`))