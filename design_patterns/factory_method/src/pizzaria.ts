export namespace Pizzaria {
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
  class PizzaDeQueijo extends Pizza{}
  class PizzaDePepperoni extends Pizza{}

  class SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
      let pizza: Pizza | null = null
      if(tipo === 'Queijo')
        pizza = new PizzaDeQueijo()
      else if (tipo === "Peperoni")
        pizza = new PizzaDePepperoni()
      return pizza
    }
  }

  export class PizzaStore{
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

  class PizzaDeQueijoDeNY extends PizzaDeQueijo{
    preparar(): void {
        console.log('Preparando pizza de queijo de NY...')
    }
    assar(): void {
      console.log('Assando pizza de queijo de NY...')
    }
    cortar(): void {
      console.log('Cortando pizza de queijo de NY...')
    }
    empacotar(): void {
      console.log('Empacotando pizza de queijo de NY...')
    }
  }

  class PizzaDePepperoniDeNY extends PizzaDePepperoni{
    preparar(): void {
      console.log('Preparando pizza de pepperoni de NY...')
    }

    assar(): void {
      console.log('Assando pizza de pepperoni de NY...')
    }

    cortar(): void {
      console.log('Cortando pizza de pepperoni de NY...')
    }

    empacotar(): void {
      console.log('Empacotando pizza de pepperoni de NY...')
    }

  }

  class PizzaDeQueijoDeChicago extends PizzaDeQueijo{
    preparar(): void {
      console.log("Preparando pizza de queijo de Chicago")    
    }
    assar(): void {
      console.log("Assando pizza de queijo de Chicago")
    } 
    cortar(): void {
      console.log("Cortando pizza de queijo de Chicago")
    }
    empacotar(): void {
      console.log("Empacotando pizza de queijo de Chicago")
    }
  }

  class PizzaDePepperoniDeChicago extends PizzaDePepperoni{
    preparar(): void {
      console.log("Preparando pizza de pepperoni de Chicago")
    }
    assar(): void {
      console.log("Assando pizza de pepperoni de Chicago")
    }
    cortar(): void {
      console.log("Cortando pizza de pepperoni de Chicago")
    }
    empacotar(): void {
      console.log("Empacotando pizza de pepperoni de Chicago")    
    }
  }

  export class SimplePizzaFactoryNY extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null {
      let pizza: Pizza | null = null
      if (tipo === 'Queijo')
        pizza = new PizzaDeQueijoDeNY()
      else if (tipo === 'Pepperoni')
        pizza = new PizzaDePepperoniDeNY()
      return pizza
    }
  }

  export class SimplePizzaFactoryChicago extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null {
      let pizza: Pizza | null = null
      if (tipo === 'Queijo')
        pizza = new PizzaDeQueijoDeChicago()
      else if (tipo === "Pepperoni")
        pizza = new PizzaDePepperoniDeChicago()
      return pizza
    }
  }
}