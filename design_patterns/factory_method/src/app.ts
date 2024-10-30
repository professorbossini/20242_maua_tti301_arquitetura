import {Pizzaria}  from './pizzaria'
//lista de franquias
let franquias = [
  new Pizzaria.PizzaStore(new Pizzaria.SimplePizzaFactoryNY()),
  new Pizzaria.PizzaStore(new Pizzaria.SimplePizzaFactoryChicago)
]
console.log(franquias[0].pedirPizza('Queijo'))
console.log(franquias[0].pedirPizza('Pepperoni'))
console.log(franquias[1].pedirPizza('Queijo'))
console.log(franquias[1].pedirPizza('Pepperoni'))