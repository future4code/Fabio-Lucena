## Exercícios de Herança
### Exercício 1 
a) Desta maneira, tentando acessar a propriedade do usuário criado, não é possível imprimir a senha, pois a mesma é "private".
b) Apenas uma vez.

### Exercício 2 
a) Foi impressa uma vez
b) Foi impressa uma vez, pois para o Customer ser criado, o programa precisou pegar o construtor do pai, no caso a class User.

### Exercício 3 
a) Não seria possível imprimir a senha, pois password em User é private, sendo assim, ela só pode ser acessada na classe User.

### console.log(user1.introduceYourself()) //Exercício 4 e 5

## Exercicios de Polimorfismo
### Exercicio 1 
a) Consegui imprimir todas as propriedades. Creio que por que a tipagem estava correta.

### Exercício 2
a) O erro gerado disse que não é possível criar uma instância de uma classe abstrata.
b) Creio que para criar uma instância de Place, seria necessário que a instância fosse criada dentro de outra classe. 

### Exercício 3
 console.log(residencia.getCep())
 console.log(residencia.getResidents())
 console.log(comercio.getCep())
 console.log(comercio.getFloors())            
 console.log(industria.getCep())
 console.log(industria.getMachines())

### Exercício 4 
a) Essa classe possui os métodos getCep, calculateBill, getCpf, todos os métodos declarados nela e nas classes pai delas.

### Exercício 5
a) Tudo que é "herdado" da implementação da interface Client é igual.
b) Tudo que é herdado de Commerce para baixo é diferente.

### Exercício 6
a) IndustrialClient deve ser filha de Industry, pois esta classe requere o numero de maquiinas e o cep da industria.
b) Pois o resto da classeé igual as outras, pois as propriedades de todas as classes são herdadas de classes Pai com a implmentação da interface Client. 