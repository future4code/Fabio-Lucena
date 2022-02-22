## Exercício 1
a) Acho válido, pois como usa-se carácteres hecadecimais, as possibilidades de não repetição, são altíssimas.

## Exercício 2
a) Desde o começo do código. Ele faz conexão com a DB no SQL através do connection e depois faz um query builder para inserir parâmetros enviados
na tabela "User".
b)
### CREATE TABLE User_aula_55(
### id VARCHAR(255) PRIMARY KEY,
### email VARCHAR(255) UNIQUE NOT NULL,
### password VARCHAR(255) UNIQUE NOT NULL);

## Exercício 3 
a) Esta nomeando a variável que está vindo do .env, para que a palavra chave, onde o jwt se baseia não esteja disponível para terceiros no código.