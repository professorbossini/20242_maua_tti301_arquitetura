//factory e suas variações
class Pessoa { }
//princípio: programe voltado a uma interface e não a uma implementação
let p: Pessoa = new Pessoa()

class Pato {

}

class PatoReal extends Pato {

}

class PatoDeCaca extends Pato {

}

class PatoDeBorracha extends Pato {

}


function qualPato(ocasiao: string): Pato | null {
  let p: Pato | null = null
  if (ocasiao === "piquenique")
    p = new PatoReal()
  else if (ocasiao === "caça")
    p = new PatoDeCaca()
  else if (ocasiao === 'banheira')
    p = new PatoDeBorracha()
  return p
}

let ocasioes: string[] = [
  'piquenique',
  'caça',
  'banheira'
]

// 0 <= Math.random () < 1
console.log(qualPato(ocasioes[Math.floor(Math.random() * 3)]))

