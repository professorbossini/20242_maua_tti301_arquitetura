const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')

// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const Q = process.env.Q
// const APP_ID = process.env.APP_ID
// const CNT = process.env.CNT
//operador de desestruturação do js

console.log(process.env)

const {
  PROTOCOL, BASE_URL, Q, APP_ID, CNT, UNITS, IDIOM
} = process.env

// console.log(BASE_URL)

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APP_ID}&cnt=${CNT}&units=${UNITS}&lang=${IDIOM}`

axios.get(url)
.then(res => {
  console.log("Exibe o data")
  console.log(res.data)
  console.log('*****************************************************')
  return res.data
})
.then(res => {
  console.log("Exibe o cnt")
  console.log(`CNT: ${res.cnt}`)
  console.log('*****************************************************')
  return res
})
.then(res => {
  //para cada resultado, mostrar algumas informações
  //exibir a data
  console.log('Exibe alguns dados de cada previsao')
  for(let previsao of res['list']){
    let data = new Date(+previsao.dt * 1000)
    let tempMin = previsao.main.temp_min
    let tempMax = previsao.main.temp_max
    let feelsLike = previsao.main.feels_like
    let description = previsao.weather[0].description
    console.log(`
      data: ${data.toLocaleString()}
      temp min: ${tempMin}\u00B0
      temp max: ${tempMax}\u00B0
      description: ${description}
      feelsLike: ${feelsLike}  
    `)
  }
  console.log('*****************************************************')
  return res['list']
})
.then(res => {
  //exibir quantas previsões têm sensação térmica maior do que 20 graus
  const total = res.filter((previsao) => +previsao.main.feels_like > 20).length
  console.log(total)
})


// console.log(url)