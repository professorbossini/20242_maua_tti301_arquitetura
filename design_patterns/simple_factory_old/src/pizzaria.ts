class Pizza{
  preparar(): void{
    console.log('Preparando a pizza...')
  }
  assar(): void{
    console.log('Assando a pizza...')
  }
  cortar(): void{
    console.log('Cortando a pizza..')
  }
  empacotar(): void{
    console.log('Empacotando a pizza..')
  }
}

class CalabresaPizza extends Pizza{}

class ChocolatePizza extends Pizza{}

class RuculaPizza extends Pizza{}

class SimplePizzaFactory{
  criarPizza(tipo: string): Pizza | null{
    let pizza: Pizza | null = null
    if (tipo === "Calabresa")
      pizza = new CalabresaPizza()
    else if (tipo === "Chocolate")
      pizza = new ChocolatePizza()
    else if (tipo === "Rucula")
      pizza = new RuculaPizza()
    return pizza
  }
}

class PizzaStore{
  // private SimplePizzaFactory simplePizzaFactory;
  // PizzaStore(SimplePizzaFactory simplePizzaFactory){
  //   this.simplePizzaFactory = simplePizzaFactory;
  // }
  constructor(private simplePizzaFactory: SimplePizzaFactory){}
  
  pedirPizza = (tipo: string): Pizza | null => {
    const pizza: Pizza | null = this.simplePizzaFactory.criarPizza(tipo)
    pizza?.preparar()
    pizza?.assar()
    pizza?.cortar()
    pizza?.empacotar()
    return pizza
  }
}
let pizzaStore: PizzaStore = new PizzaStore(new SimplePizzaFactory())
console.log(pizzaStore.pedirPizza('Rucula'))

