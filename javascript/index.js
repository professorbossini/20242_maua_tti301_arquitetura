function calculoDemorado(n){
  let p = new Promise(function(resolve, reject){
    let res = 0
    for(let i = 1; i <= n; i++) res += i
    resolve(res)
  })
  return p
}

function comThenCatch(){
  //2015
  calculoDemorado(10)
  .then(res => {
    console.log(res)
    calculoDemorado(res + 1).then(res2 => {
      console.log(res2)
    })
  })
  .catch(erro => {
    console.log(`Erro: ${erro}`)
  })
}

// async function comAsyncAwait(){
//   //2017


// }

const comAsyncAwait = async () => {
  try{
    const res = await calculoDemorado(10)
    console.log(resultado)
    const res2 = await calculoDemorado(res + 1)
    console.log(res2)
  }
  catch(e){
    console.log(`Erro: ${e}`)
  }
}

// async function hello(nome){
//   return `Oi, ${nome}`
// }

// const resultado = hello('Ana')
// resultado.then(r => console.log(r))
//console.log(resultado)

// //promises
// function calculoRapidinho(n){
//   return n >= 0 ?Promise.resolve( n * (n+1) / 2) : Promise.reject('Somente positivos')
//   //se n >= 0, devolva uma promise fullfilled com o resultado correspondente

//   //caso contrário, devolva uma promise rejected dizendo somente valores positivos, por favor  
// }

// //teste da seguinte forma

// calculoRapidinho(10).then((res) => console.log(res), (erro) => console.log(`Erro: ${erro}`))

// calculoRapidinho(-1).then((res) => console.log(res), (erro) => console.log(`Erro: ${erro}`))
// calculoRapidinho(10)
// .then(resultado => console.log(resultado))
// .catch(erro => console.log(`Erro: ${erro}`))

// calculoRapidinho(10).then()

// calculoRapidinho(-1)
// .then(resultado => console.log(resultado))
// .catch(erro => console.log(`Erro: ${erro}`))


// //1 + 2 + ... + (n - 1) + n
// // const calculoRapidinho = (n) => {
// //   return Promise.resolve((n * (n + 1)) / 2)
// //   // let p = new Promise((sucesso, falha) => {
      
// //   // })
// // }
// // calculoRapidinho(10).then(resultado => console.log(resultado))
// // function calculoDemorado(n){
// //   let p = new Promise(function(resolve, reject){
// //     let res = 0
// //     for(let i = 1; i <= n; i++) res += i
// //     resolve(res)
// //   })
// //   return p
// // }

// let resultadoPromise = calculoDemorado(10)
// resultadoPromise
// .then((resultado) => {
//   console.log(`Resultado: ${resultado}`)
//   calculoDemorado(resultado).then((resultado2) => {
//     console.log(resultado2)
//   })
// })
// .catch((erro) => {
//   console.log(`Erro: ${erro}`)
// })


// // const fs = require('fs')
// // const abrirArquivo = function(nomeArquivo){
// //   console.log('Começou a função abrirArquivo..')
// //   const exibirConteudo = function(erro, conteudo){
// //     if(erro){
// //       console.log(`Erro: ${erro}`)
// //     }
// //     else{
// //       console.log(`Conteúdo: ${conteudo.toString()}`)
// //       const dobro = +conteudo.toString() * 2
// //       const finalizar = function (erro){
// //         if(!erro)
// //           console.log('Salvou o dobro com sucesso')
// //         else
// //           console.log('Coisas ruins aconteceram..')
// //       }
// //       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
// //     }
// //   }
// //   fs.readFile(nomeArquivo, exibirConteudo)
// //   console.log('Terminou a função abrirArquivo...')
// // }
// // abrirArquivo('arquivo.txt')
// // console.log('Começou...')
// // setTimeout(() => {
// //   console.log('Dentro da setTimeout')
// // }, 0)
// // const atualMais10 = new Date().getTime() + 10000
// // while(new Date().getTime() <= atualMais10);
// // console.log('Script principal terminou...')

// // function demorada(){
// //   const atualMais2Segundos = new Date().getTime() + 2000
// //   while(new Date().getTime() <= atualMais2Segundos);
// //   const d = 8 + 4
// //   return d
// // }
// // const a = 2 + 3
// // const b = 5 + 9
// // setTimeout(function(){
// //   const d = demorada()
// //   console.log(`d: ${d}`)
// // }, 500)
// // const e = 2 + a + b
// // console.log(e)
// // function demorada(){
// //   //const atualMais2Segundos = new Date().getTime() + 2000
// //   // const mili = new Date().getTime()
// //   // console.log(`mili: ${mili}`)
// //   // const seg = mili / 1000
// //   // console.log(`seg: ${seg}`)
// //   // const min = seg / 60
// //   // console.log(`min: ${min}`)
// //   // const hora = min / 60
// //   // console.log(`hora: ${hora}`)
// //   // const dia = hora / 24
// //   // console.log(`dia: ${dia}`)
// //   // const ano = dia / 365
// //   // console.log(`ano: ${ano}`)
// // }
// // demorada()

// // const a = 2 + 7
// // const b = 5
// // console.log(a + b)

// // console.log('Eu primeiro')
// // console.log('Agora eu')
// // console.log('Sempre vou ser a última...:(')

// //uma calculadora que faz soma e subtracao
// //cada operacao envolve dois operandos
// //a soma é uma função regular
// //a subtração é uma arrow function que não usa return
// // const calc = {
// //   soma: function(a, b){
// //     return a + b
// //   },
// //   subtracao: (a, b) => calc.soma(a, -b)
// // }
// // console.log(calc.soma(2, 2))
// // console.log(calc.subtracao(3, 2))

// // const concessionaria = {
// //   cnpj: '123456789',
// //   endereco: {
// //     logradouro: 'Rua J',
// //     numero: 43
// //   },
// //   carros: [
// //     {
// //       marca: 'VW',
// //       modelo: 'Fusca',
// //       ano: 1995
// //     },
// //     {
// //       marca: 'Toyota',
// //       modelo: 'Corolla',
// //       ano: 2023
// //     }
// //   ]
// // }

// // //completar essa funçao
// // const encontraVeiculos = (marca) => {
// //   //ela devolve uma coleção que contem todos os veiculos da marca recebida como parametro
// //   //use a função filter
// // }

// // console.log(encontraVeiculos('Toyota'))


// // for (const carro of concessionaria.carros){
// //   if(carro.modelo === 'Corolla')
// //     console.log(carro)
// // }

// //iterar sobre a coleção inteira, usando for/of e, quando encontrar o Corolla, exibir todos os seus dados
// //mozilla developer network

// //usando apenas o operador [], mostre o modelo do segundo carro
// // console.log(concessionaria['carros'][1]['modelo'])

// // const carros = [
// //   {
// //     marca: 'VW',
// //     modelo: 'Fusca',
// //     ano: 1989
// //   },
// //   {
// //     marca: 'Toyota',
// //     modelo: 'Corolla',
// //     ano: 2024
// //   }
// // ]
// // console.log(carros[0].marca)
// // console.log(carros[0]['ano'])


// //objetos Javascript
// //uma concessionária de veículos tem CNPJ e endereço. Ela possui alguns carros
// //em estoque. Cada um deles tem marca, modelo e ano de fabricacao.

// //uma pessoa que se chama Maria, tem 21 anos e mora na rua B, número 121
// // let pessoa = {
// //   nome: 'Maria',
// //   idade: 21,
// //   endereco: {
// //       logradouro: 'Rua B',
// //       numero: 121
// //   }
// // }
// // console.log(pessoa.endereco.logradouro)
// // console.log(pessoa['endereco']['numero'])
// // console.log(pessoa['endereco'].logradouro)
// // console.log(pessoa.endereco['numero'])


// //uma pessoa que se chama João e tem 17 anos
// // let pessoa = {
// //   nome: 'João',
// //   idade: 17
// // }
// // console.log(pessoa)
// // console.log(pessoa.nome)
// // console.log(pessoa['nome'])

// // function eAgora(){
// //   let cont = 1
// //   function f1(){
// //     console.log(cont)
// //   }
// //   cont++
// //   function f2(){
// //     console.log(cont)
// //   }
// //   cont++
// //   function f3(){
// //     cont++
// //   }
// //   f3()
// //   return {f1, f2}
// // }

// // let eAgoraResult = eAgora()

// // eAgoraResult.f1()
// // eAgoraResult.f2()


// //closure
// // function saudacoesFactory(saudacao, nome){
// //   return function(){
// //     console.log (`${saudacao}, ${nome}`)
// //   }
// // }

// // let olaJoao = saudacoesFactory('Olá', 'João')
// // let tchauJoao = saudacoesFactory('Tchau', 'João')
// // olaJoao()
// // tchauJoao()


// // function ola(){
// //   let nome = 'João'
// //   return function(){
// //     console.log(`Olá, ${nome}`)
// //   }
// // }
// // let olaResult = ola()
// // olaResult()




// // function f (){
// //   let nome = 'João'
// //   function g(){
// //     let idade = 19
// //     console.log(nome)
// //   }
// //   g()
// // }
// // f()




// // function f(){
// //   let nome = 'João'
// //   function g(){
// //     let a
// //     console.log(nome)
// //   }
// //   g()
// // }
// // f()


// // function g(){
// //   function outraFuncao(){
// //     console.log('Fui criada por g')
// //   }
// //   function maisUma(){
// //     console.log('Sou mais uma')
// //     return () => console.log('A')
// //   }
// //   return [outraFuncao, maisUma]
// // }
// // function f(funcao){
// //   console.log(funcao)
// //   funcao()
// //   return undefined
// // }

// // //usando a f, faça o texto Sou mais uma aparecer
// // f(g()[1]())


// // g()[0]()
// // g()[1]()
// //console.log(g()()())
// // let umaFuncao = function(){
// //   console.log('Fui armazenada em uma variável')
// // }
// // umaFuncao()

// // function f (funcao){
// //   funcao()
// // }

// // f(umaFuncao)


// // // const hello = () => console.log('Hello')
// // // hello()
// // // const dobro = valor => valor * 2
// // // console.log(dobro(7))
// // // const triplo = valor => {
// // //   console.log(valor)
// // //   valor * 3
// // //   return undefined
// // // }
// // console.log(triplo(7))
// // //  a => {
// // //   return 2 * a
// // // }

// // // var undefined = [undefined, null]
// // // console.log(undefined == [1])
// // // //funções regulares
// // // const triplo = function(n = 5){
// // //   return n * 3
// // // }
// // // console.log(triplo(3))
// // // console.log(triplo(null))
// // // console.log(null * 3)
// // // const dobro = function (n){
// // //   return 2 * n
// // // }
// // // console.log(dobro)
// // // console.log(dobro(5))


// // // public class Pessoa{

// // //   public void andar(){

// // //   }

// // //   public void teste(){
// // //     var seila = andar;
// // //   }
// // // }

// // // function soma(a, b){
// // //   return a + b
// // // }
// // // const r = soma(2, 3)
// // // console.log(r)
// // // function hello(){
// // //   console.log('Oi')
// // // }
// // // hello()
// // // function hello(nome){
// // //   console.log('Oi, ' + nome)
// // // }
// // // hello('Ana')
// // //arrow functions




// // // const valores = [20, 21, 22, 24]
// // // let i
// // // const resultado = valores.reduce((ac, v, i, x) => {console.log(i); x.push(2); console.log(x);return ac + i})
// // // console.log(resultado)
// // // console.log('Valores' + valores)
// // // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// // // const eAgora = nomes.some(n => n.startsWith('A'))
// // // console.log(eAgora)
// // // const eAgora = nomes.every(n => n.startsWith('A'))
// // // console.log(eAgora)
// // // var linguagem = "JS"
// // // linguagem = "Java"
// // // var idade = 18
// // // console.log('Oi ' + nome)
// // // //hoist: içamento
// // // if(idade >= 19){
// // //   let nome = "Jaqueline"
// // //   console.log(nome + ', você pode dirigir')
// // // }
// // // console.log('Tchau ' + nome)


// // // //filter
// // // //resolva esse problema: produza um vetor que contém somente os nomes que começam com a letra A (não vale usar a função filter)
// // // const resultado = nomes.filter((n) => n.startsWith('A') || n.startsWith ('a'))
// // // console.log(resultado)

// // // //usando um for bruto
// // // //produzir um vetor que contém a letra inicial de cada nome do vetor nomes
// // // const resultado2 = nomes.map((nome) => nome.charAt(0))
// // // console.log(resultado2)


// // // const v = [1, 2, 3]
// // // console.log(v)
// // // // v.push(4)
// // // v = [1, 2, 3]
// // // console.log(v)

// // // v1 = []
// // // console.log(v1.length)
// // // v1[0] = 3.4
// // // console.log(v1.length)
// // // v1[10] = "abc"
// // // console.log(v1.length)
// // // v2 = [2, "abc", true]
// // // console.log(v2)
// // // for (let i = 0; i < v2.length; i++)
// // //   console.log(v2[i])
// // // //comparação == e ===
// // // console.log(1 == 1)
// // // console.log(1 == "1")
// // // console.log(1 === 1)
// // // console.log(1 === "1")
// // // console.log(true == 1)
// // // //[1]
// // // console.log (1 == [1])
// // // // const j = undefined
// // // console.log(null == null)
// // // console.log(null == undefined)
// // // console.log([] == false)
// // // console.log([] == [])
// // // const n1 = 2
// // // const n2 = '3'
// // // //coerção implícita
// // // const n3 = n1 + n2
// // // console.log(n3)
// // // //coerção explícita
// // // const n4 = n1 + Number(n2)
// // // console.log(n4)

// // // //hoist: içamento
// // // //mecanismo de dupla passagem do js
// // // var idade = 18
// // // console.log(`Oi, ${nome}`)
// // // if(idade >= 18){
// // //   let nome = "João"
// // //   console.log(`Parabéns, ${nome}. Você pode dirigir`)
// // // }
// // // console.log("Até, " + nome)


// // // var linguagem = "Javascript"
// // // console.log("Aprendendo " + linguagem)
// // // var linguagem = "Java"
// // // console.log("Aprendendo " + linguagem)

// // // //const, let e var
// // // //use const para aplicar o princípio do menor privilégio
// // // const nome = "Luiz"
// // // console.log(nome)
// // // // nome = "João"
// // // let a = 2
// // // console.log(a)
// // // console.log(typeof(a))
// // // a = "João"
// // // console.log(a)
// // // console.log(typeof(a))
// // // var b = "oi"
// // // b = "tchau"
