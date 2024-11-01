import CacheService from "./CacheService";

const cache = CacheService.getInstance()

cache.set('João', '123456')
console.log(cache.get('João'))



// import Singleton from "./Singleton";
// for (let i = 0; i < 10; i++){
//   let singleton: Singleton = Singleton.getInstance()
//   singleton.executar()
// }