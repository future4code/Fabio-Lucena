import { Client } from "./Classes/Client"
import { Commerce } from "./Classes/Commercial/Commerce"
import { Customer } from "./Classes/Customer"
import { Industry } from "./Classes/Industry/Industry"
import { Place } from "./Classes/Place"
import { Residence } from "./Classes/Residential/Residence"
import { ResidentialClient } from "./Classes/Residential/ResidentialClient"
import { User } from "./Classes/User"
import { CommercialClient } from "./Classes/Commercial/CommercialClient"
import { IndustrialClient } from "./Classes/Industry/IndustrialClient"

//   const user1: User = new User("001", "bananinha@email.com", "Guariba", "123456")

  //console.log(user1.password)
  //Exercício 1 a) Desta maneira, tentando acessar a propriedade do usuário criado, não é possível imprimir a senha, pois a mesma é "private".
  //b) Apenas uma vez.

//   const user1: Customer = new Customer("001", "bananinha@email.com", "Guariba", "123456", "045846584163546")

//   console.log(user1)

  //Exercício 2 a) Foi impressa uma vez
  //b) Foi impressa uma vez, pois para o Customer ser criado, o programa precisou pegar o construtor do pai, no caso a class User.

//   console.log(user1.getId())
//   console.log(user1.getName())
//   console.log(user1.getEmail())
  
  //Exercício 3 a) Não seria possível imprimir a senha, pois password em User é private, sendo assim, ela só pode ser acessada na classe User.

//   console.log(user1.introduceYourself()) //Exercício 4 e 5

// Exercicios de Polimorfismo
//Exercicio 1 a) Consegui imprimir todas as propriedades. Creio que por que a tipagem estava correta.
//   const client: Client = {
//       name: "Guariba",
//       registrationNumber: 2,
//       consumedEnergy: 100,

//       calculateBill: ()=>{
//           return 2;
//       }

//   }

//   console.log(client.name)
//   console.log(client.registrationNumber)
//   console.log(client.consumedEnergy)
//   console.log(client.calculateBill())

//   const place: Place = new Place /////////// O erro gerado disse que não é possível criar uma instância de uma classe abstrata.
//b) creio que para criar uma instância de Place, seria necessário que a instância fosse criada dentro de outra classe.

// const residencia: Residence = new Residence(3, "80630020")
// const comercio: Commerce = new Commerce(2, "80630030")
// const industria: Industry = new Industry(10, "80630040")

// console.log(residencia.getCep())
// console.log(residencia.getResidents())
// console.log(comercio.getCep())
// console.log(comercio.getFloors())            /////////////// exercício 3
// console.log(industria.getCep())
// console.log(industria.getMachines())

const residencia: ResidentialClient = new ResidentialClient("Guariba", 2, 75, "08504699840", 3, "80630020")

console.log(residencia.getCpf())
console.log(residencia.getCep())
console.log(residencia.calculateBill()) // Exercicio4: essa classe possui os métodos getCep, calculateBill, getCpf, todos os métodos declarados nela e nas classes pai delas.

//Exercício 5
const comercio: CommercialClient = new CommercialClient("Guariba Commerce", 4, 100, "45.648.789/0001-20", 2, "80630030")

console.log(comercio.getCnpj())
console.log(comercio.getCep())
console.log(comercio.calculateBill())
// a) Tudo que é "herdado" da implementação da interface Client é igual.
// b) Tudo que é herdado de Commerce para baixo é diferente.

//Exercicio 6

const industria: IndustrialClient = new IndustrialClient("Guariba's Industries", 52, 1000, "45.648.789", 16, "80630040")

console.log(industria.getIndustrialNumber())
console.log(industria.getCep())
console.log(industria.calculateBill())
// a) IndustrialClient deve ser filha de Industry, pois esta classe requere o numero de maquiinas e o cep da industria.
// b) Pois o resto da classeé igual as outras, pois as propriedades de todas as classes são herdadas de classes Pai com a implmentação da interface Client. 