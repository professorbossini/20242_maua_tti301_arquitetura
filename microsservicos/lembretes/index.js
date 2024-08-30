const express = require('express')
const app = express()
app.use(express.json())
/*
{
  1: {
    id: 1,
    texto: 'Fazer café'
  },
  2: {
    id: 2,
    texto: 'ir à feira
  }
}
*/
const lembretes = {}
let id = 0
//GET /lembretes
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

//POST /lembretes
app.post('/lembretes', (req, res) => {
  //gerar um identificador, usando um contador
  id++
  //pegar um objeto da req que é assim: {texto: 'fazer café'}
  const lembrete = {id, texto: req.body.texto}
  //adicionar à base, assim: {15: {id: 15, texto: fazer café}}
  lembretes[id] = lembrete
  //devolver o recurso criado e, mais ainda, ajustar o código de status para 201
  res.status(201).json(lembretes[id])
})