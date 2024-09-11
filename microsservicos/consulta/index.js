require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const { PORT } = process.env

//GET /lembretes


//POST /eventos


app.listen(PORT, () => console.log(`Consulta. ${PORT}`))