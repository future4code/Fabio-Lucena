# Case2-Projeto Amaro

Este projeto tem como objetivo a criação de uma API para cadastro e consulta de produtos. Para isso foram utilizadas as tecnologias Typescript, express, cors, knex, uuid, dotenv e banco de dados mySQL. A mesma deveria permitir os seguintes fluxos:

### End-point para inserção de dados
- O cliente poderá enviá-los em arquivos json ou xml e a API deverá inserir no banco de dados.
- Escolha o banco de dados que achar melhor.

### End-point para consulta destes produtos
- Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome, deverá listar todos os produtos com aquela respectiva busca, poderá ser feito em um ou mais end-points.

### Requisitos Obrigatórios
- Ter uma cobertura de teste relativamente boa, a maior que você conseguir.

## Documentação da API no Postman:
https://documenter.getpostman.com/view/18384389/UVyuTbRo

## A API e seu pleno funcionamento serão descritos a seguir:

### Criando as tabelas no mySQL

Para que as tabelas sejam criadas no mySQL é necessário criar um script no arquivo package.json, da seguinte maneira:

![script migrations](https://user-images.githubusercontent.com/91218096/161898130-819281ad-8ecd-41e7-9b8c-0b59edfdd1fa.png)

então no node utilizar o seguinte comando:

![comando node migrations](https://user-images.githubusercontent.com/91218096/161898332-3794e466-5a77-4ac0-9501-bd440ab8a0ab.png)


## Inserir Produto

Para que um produto seja inserido, é necessário utilizar o endpoint "/product/insert", sendo necessário também o uso do método POST e o envio de um body com os seguintes detalhes: 

{
    "name": "Nome do produto",
    "tags": ["tag1", "tag2", "tag3","tag4"...]
}

Exemplo:

![body products](https://user-images.githubusercontent.com/91218096/161892396-cc857032-688f-46c4-874e-ef5c13d496b8.png)

Caso tudo esteja certo a resposta deverá ser a seguinte:

![resposta inserir produto](https://user-images.githubusercontent.com/91218096/161892683-02db41df-fd95-4731-b41a-483b46983149.png)

Caso o nome da produto ja esteja na lista de produtos um erro irá aparecer com a seguinte mensagem:

![erro nome repetido](https://user-images.githubusercontent.com/91218096/161894044-7c653fa8-e261-454f-86e3-199a82fe7b7d.png)

## Consulta de Produtos
### Consulta por ID

Para consultar um produto por ID, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio de um body com o ID do produto, da seguinte maneira:

{
    "id": "ID do produto"
}

Exemplo:

![busca por id](https://user-images.githubusercontent.com/91218096/161895973-a1437e03-736a-4697-97ee-4ebeb645ea1b.png)

Se o ID estiver correto a resposta virá com a descrição do produto no seguinte formato:

![produto buscado por id](https://user-images.githubusercontent.com/91218096/161896085-648014c1-82c3-47c2-a014-6567508efd89.png)

### Consulta por nome
Para consultar um produto por nome, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio de um body com o nome do produto, da seguinte maneira:

{
    "name": "Nome do produto"
}

Exemplo:

![busca por nome](https://user-images.githubusercontent.com/91218096/161896640-54a7a446-aa78-4d98-8a0c-f551ae4f3345.png)

Caso o nome exista na lista de produtos a API retornará:

![retorno exato busca por nome](https://user-images.githubusercontent.com/91218096/161896833-a9ef99c1-f745-4506-b245-12f55fb08204.png)

Lembrando que ao consultar um produto com uma palavra aproximada, não exata, a API retornará todos os produtos com o nome inserido:

![retorno não exato busca por nome](https://user-images.githubusercontent.com/91218096/161896928-ace4e4d3-4768-4055-bec8-db4fe6b5ba9f.png)

Caso não haja produto com o respectivo nome ou chave de consulta, o seguinte erro aparecerá:

![erro busca por nome](https://user-images.githubusercontent.com/91218096/161897054-a1ae0373-1162-4ee6-aabc-79ebd0d7211e.png)

### Consulta por Tags
Para consultar um produto por tag, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio de um body com a tag a ser pesquisada, da seguinte maneira:

{
    "tags": "tag1"
}

Exemplo:

![busca por tag](https://user-images.githubusercontent.com/91218096/161897254-a64fe921-5d6a-4e72-a325-4089870cc9e1.png)

Caso a tag exista na lista de produtos a API retornará todos os produtos que contém esta tag:

![retorno tag](https://user-images.githubusercontent.com/91218096/161897481-84eae5bd-a193-49e2-9fb4-e6527829bbbc.png)


Caso não haja produto com a respectiva tag, o seguinte erro aparecerá:

![erro busca por nome](https://user-images.githubusercontent.com/91218096/161897054-a1ae0373-1162-4ee6-aabc-79ebd0d7211e.png)



