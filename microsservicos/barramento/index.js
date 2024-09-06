require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const { PORT } = process.env


//definir o endpoint
//POST /eventos
app.post('/eventos', (req, res) => {
  //1. pega o corpo da requisição
  const evento = req.body  
  //2. envia para o mss de lembretes na porta 4000 (post /eventos)
  axios.post('http://localhost:4000/eventos', evento)
  //3. envia para o mss de observações na porta 5000 (post /eventos)
  axios.post('http://localhost:5000/eventos', evento)
  //4. encerra com código 200, devolvendo uma eventual mensagem de sucesso
  res.status(200).json({mensagem: 'ok'})
})




app.listen(PORT, () => console.log(`Barramento. Porta ${PORT}.`))

