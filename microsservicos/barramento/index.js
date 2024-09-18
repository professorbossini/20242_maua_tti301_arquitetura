require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const { PORT } = process.env

const eventos = []

//definir o endpoint
//POST /eventos
app.post('/eventos', async (req, res) => {
  const evento = req.body
  eventos.push(evento)
  console.log(evento) 
  try{
    await axios.post('http://localhost:4000/eventos', evento)
  }
  catch(err){}
  try{
    await axios.post('http://localhost:5000/eventos', evento)
  }
  catch(err){
    await axios.post('http://localhost:6000/eventos', evento)
  }
  try {
    await axios.post('http://localhost:7000/eventos', evento)
  }
  catch (err) {}
  res.status(200).json({mensagem: 'ok'})
})


app.get('/eventos', function(req, res){
  res.json(eventos)
})



app.listen(PORT, () => console.log(`Barramento. Porta ${PORT}.`))

