//lembre-se de lidar com o .env e o .env.example
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const { PORT } = process.env

//1. 
//pense em como vocẽ vai organizar a sua base de observações
//dado um id de lembrete, temos que ser capazes de acessar a sua lista de observações, tanto para cadastro de nova observação quanto para a sua obtenção
/*
[
  {
    id: 1,
    texto: lembrete,
    observacoes: [
      {
        id: iro23jafweçoj,
        texto: observacao
      }
    ]
  }
]
*/

/*
{
  1: [
    {
      id: ifewouaçufoewiaç,
      idLembrete: 1,
      texto: comprar acucar,
    
    },
     {
      id: ifewouaçufoewiaç,
      idLembrete: 1,
      texto: comprar acucar,
    
    }
  ],
  2: []
}    
*/
const observacoesPorLembrete = {}
//1. Definir o tratamento do evento ObservacaoClassificada
//A função associada recebe uma observação
//Ela deve encontrar essa observação na base local do mss de observacoes e fazer a atualizacao de status
//Ela deve emitir evento direcionado ao barramento de eventos, que deve ser do tipo ObservacaoAtualizada e deve ter como payload a observacao recebida, claro, incluindo o status
const funcoes = {
  ObservacaoClassificada:(observacao) => {
    const observacoes = observacoesPorLembrete[observacao.lembreteId]
    const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
    obsParaAtualizar.status = observacao.status
    axios.post('http://192.168.79.167:10000/eventos', {
      type: "ObservacaoAtualizada",
      payload: {
        id: observacao.id,
        texto: observacao.texto,
        lembreteId: observacao.lembreteId,
        status: observacao.status
      }
    })  
  }
}


//3.
//defina dois endpoints
//GET /lembretes/idLembrete/observacoes
//exemplo: /lembretes/15/observacoes: isso dá acesso à coleção de observações apenas do lembrete de id igual a 15
app.get('/lembretes/:idLembrete/observacoes', (req, res) => {
  res.json(observacoesPorLembrete[req.params.idLembrete] || [])
})


//2. Gere identificadores para as observações, usando o pacote uuid (encontre mais sobre ele no npmjs.com)
//POST /lembretes/idLembrete/observacoes
//suba o serviço na porta 5000
//{texto: comprar açúcar}
app.post('/lembretes/:idLembrete/observacoes', async function(req, res){
  const idObservacacao = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = observacoesPorLembrete[req.params.idLembrete] || []
  observacoesDoLembrete.push({
    id: idObservacacao, 
    texto,
    status: 'aguardando'
  })
  //indexar a base geral de idLembrete e associar a coleção de observações
  observacoesPorLembrete[req.params.idLembrete] = observacoesDoLembrete
  // HATEOAS
  await axios.post('http://192.168.79.167:10000/eventos', {
    type: 'ObservacaoCriada',
    payload: {
      id: idObservacacao,
      texto,
      lembreteId: req.params.idLembrete,
      status: 'aguardando'
    }
  })
  res.status(201).json(observacoesDoLembrete)

})


app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.type](evento.payload)
  }
  catch(err){}
  res.json({msg: 'ok'})
})

app.listen(PORT, () => console.log(`Observações. PORTA ${PORT}.`))