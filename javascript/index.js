

// function f(){
//   let nome = 'João'
//   function g(){
//     let a
//     console.log(nome)
//   }
//   g()
// }
// f()


// function g(){
//   function outraFuncao(){
//     console.log('Fui criada por g')
//   }
//   function maisUma(){
//     console.log('Sou mais uma')
//     return () => console.log('A')
//   }
//   return [outraFuncao, maisUma]
// }
// function f(funcao){
//   console.log(funcao)
//   funcao()
//   return undefined
// }

// //usando a f, faça o texto Sou mais uma aparecer
// f(g()[1]())


// g()[0]()
// g()[1]()
//console.log(g()()())
// let umaFuncao = function(){
//   console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

// function f (funcao){
//   funcao()
// }

// f(umaFuncao)


// // const hello = () => console.log('Hello')
// // hello()
// // const dobro = valor => valor * 2
// // console.log(dobro(7))
// // const triplo = valor => {
// //   console.log(valor)
// //   valor * 3
// //   return undefined
// // }
// console.log(triplo(7))
// //  a => {
// //   return 2 * a
// // }

// // var undefined = [undefined, null]
// // console.log(undefined == [1])
// // //funções regulares
// // const triplo = function(n = 5){
// //   return n * 3
// // }
// // console.log(triplo(3))
// // console.log(triplo(null))
// // console.log(null * 3)
// // const dobro = function (n){
// //   return 2 * n
// // }
// // console.log(dobro)
// // console.log(dobro(5))


// // public class Pessoa{

// //   public void andar(){

// //   }

// //   public void teste(){
// //     var seila = andar;
// //   }
// // }

// // function soma(a, b){
// //   return a + b
// // }
// // const r = soma(2, 3)
// // console.log(r)
// // function hello(){
// //   console.log('Oi')
// // }
// // hello()
// // function hello(nome){
// //   console.log('Oi, ' + nome)
// // }
// // hello('Ana')
// //arrow functions




// // const valores = [20, 21, 22, 24]
// // let i
// // const resultado = valores.reduce((ac, v, i, x) => {console.log(i); x.push(2); console.log(x);return ac + i})
// // console.log(resultado)
// // console.log('Valores' + valores)
// // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// // const eAgora = nomes.some(n => n.startsWith('A'))
// // console.log(eAgora)
// // const eAgora = nomes.every(n => n.startsWith('A'))
// // console.log(eAgora)
// // var linguagem = "JS"
// // linguagem = "Java"
// // var idade = 18
// // console.log('Oi ' + nome)
// // //hoist: içamento
// // if(idade >= 19){
// //   let nome = "Jaqueline"
// //   console.log(nome + ', você pode dirigir')
// // }
// // console.log('Tchau ' + nome)


// // //filter
// // //resolva esse problema: produza um vetor que contém somente os nomes que começam com a letra A (não vale usar a função filter)
// // const resultado = nomes.filter((n) => n.startsWith('A') || n.startsWith ('a'))
// // console.log(resultado)

// // //usando um for bruto
// // //produzir um vetor que contém a letra inicial de cada nome do vetor nomes
// // const resultado2 = nomes.map((nome) => nome.charAt(0))
// // console.log(resultado2)


// // const v = [1, 2, 3]
// // console.log(v)
// // // v.push(4)
// // v = [1, 2, 3]
// // console.log(v)

// // v1 = []
// // console.log(v1.length)
// // v1[0] = 3.4
// // console.log(v1.length)
// // v1[10] = "abc"
// // console.log(v1.length)
// // v2 = [2, "abc", true]
// // console.log(v2)
// // for (let i = 0; i < v2.length; i++)
// //   console.log(v2[i])
// // //comparação == e ===
// // console.log(1 == 1)
// // console.log(1 == "1")
// // console.log(1 === 1)
// // console.log(1 === "1")
// // console.log(true == 1)
// // //[1]
// // console.log (1 == [1])
// // // const j = undefined
// // console.log(null == null)
// // console.log(null == undefined)
// // console.log([] == false)
// // console.log([] == [])
// // const n1 = 2
// // const n2 = '3'
// // //coerção implícita
// // const n3 = n1 + n2
// // console.log(n3)
// // //coerção explícita
// // const n4 = n1 + Number(n2)
// // console.log(n4)

// // //hoist: içamento
// // //mecanismo de dupla passagem do js
// // var idade = 18
// // console.log(`Oi, ${nome}`)
// // if(idade >= 18){
// //   let nome = "João"
// //   console.log(`Parabéns, ${nome}. Você pode dirigir`)
// // }
// // console.log("Até, " + nome)


// // var linguagem = "Javascript"
// // console.log("Aprendendo " + linguagem)
// // var linguagem = "Java"
// // console.log("Aprendendo " + linguagem)

// // //const, let e var
// // //use const para aplicar o princípio do menor privilégio
// // const nome = "Luiz"
// // console.log(nome)
// // // nome = "João"
// // let a = 2
// // console.log(a)
// // console.log(typeof(a))
// // a = "João"
// // console.log(a)
// // console.log(typeof(a))
// // var b = "oi"
// // b = "tchau"
