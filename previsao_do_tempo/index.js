const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')

const PROTOCOL = process.env.PROTOCOL
const BASE_URL = process.env.BASE_URL
const Q = process.env.Q
const APP_ID = process.env.APP_ID

console.log(BASE_URL)

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APP_ID}`

console.log(url)