class Pizza{
  preparar(): void{
    console.log('Preparando a pizza...')
  }
  assar(): void{
    console.log('Assando a pizza...')
  }
  cortar(): void{
    console.log('Cortando a pizza...')
  }
  empacotar(): void{
    console.log('Empacotando a pizza...')
  }
}
class CalabresaPizza extends Pizza{}
class PeperoniPizza extends Pizza{}
class FrangoCatupiryPizza extends Pizza{}

class SimplePizzaFactory{
  criarPizza(tipo: string): Pizza | null{
    let pizza: Pizza | null = null
    if(tipo === 'Calabresa')
      pizza = new CalabresaPizza()
    else if (tipo === "Peperoni")
      pizza = new PeperoniPizza()
    else if (tipo == 'FrangoCatupiry')
      pizza = new FrangoCatupiryPizza()
    return pizza
  }
}

class PizzaStore{
  constructor (private simplePizzaFactory: SimplePizzaFactory){

  }
  pedirPizza = (tipo: string): Pizza | null => {
    let pizza = this.simplePizzaFactory.criarPizza(tipo)
    pizza?.preparar()
    pizza?.assar()
    pizza?.cortar()
    pizza?.empacotar()
    return pizza
  }
}

let pizzaStore: PizzaStore = new PizzaStore(new SimplePizzaFactory())
console.log(pizzaStore.pedirPizza('Peperoni'))
// console.log(pedirPizza('Calabresa'))