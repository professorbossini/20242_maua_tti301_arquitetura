class Pato{}
class PatoReal extends Pato{}
class PatoDeCaca extends Pato{}
class PatoDeBorracha extends Pato{}

//viola o princípio aberto/fechado
function qualPato(ocasiao: string): Pato | null {
  let pato: Pato | null = null
  if(ocasiao === "piquenique")
    pato = new PatoReal()
  else if (ocasiao === "caça")
    pato = new PatoDeCaca()
  else if (ocasiao === "banheira")
    pato = new PatoDeBorracha()
  return pato
}

let ocasioes: string [] = [
  'piquenique', 'caça', 'banheira'
]

// 0 <= Math.random() < 1
console.log(qualPato(ocasioes[Math.floor(Math.random() * 3)]))


// indesejável
// function teste(): void{
//   //falar new é indesejável, surpreendentemente
//   let pato: Pato = new Pato()  
// }


//Em java, seria assim: String hello;
// let hello: string = 'Hello, Typescript!'
// console.log(hello)
