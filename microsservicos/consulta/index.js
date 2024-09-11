require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const { PORT } = process.env

const baseConsulta = {}

const funcoes = {
  LembreteCriado: (lembrete) => {
    baseConsulta[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
    observacoes.push(observacao)
    baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
  },
  
}


//GET /lembretes
app.get('/lembretes', (req, res) => {
  res.json(baseConsulta)
})

//POST /eventos
app.post('/eventos', (req, res) => {
  const evento = req.body
  funcoes[evento.type](evento.payload)  
})


app.listen(PORT, () => console.log(`Consulta. ${PORT}`))