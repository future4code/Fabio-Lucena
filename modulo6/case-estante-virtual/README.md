# Case1-Projeto Estante Virtual

Este projeto tem como objetivo marcar e dizer vencedores de competições das seguintes modalidades:

- 100m rasos: Menor tempo vence
- Lançamento de Dardo: Maior distância vence

Esta API REST foi produzida com as tecnologias Typescript, express, cors, knex, uuid, dotenv e banco de dados mySQL. A mesma deveria permitir os seguintes fluxos:
1. Criar uma competição
2. Cadastrar resultados para uma competição (todos os campos são obrigatórios)
3. Finalizar uma competição.
4. Retornar o ranking da competição, exibindo a posição final de cada atleta.

E com os seguintes detalhes: 
1. A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.
2. A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
3. No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.
4. O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação.
Testes são obrigatórios.

## Documentação da API no Postman:
https://documenter.getpostman.com/view/18384389/UVyn3eLG


___


## A API e seu pleno funcionamento serão descritos a seguir:

## 1.1 Criar competição de 100 metros rasos
Para criar uma competição de 100 metros rasos é necessário usar o método POST e o endpoint "/competition/create", sendo necesário também enviar um body com os seguintes detalhes: 
{
    "name": "Nome da competição",
    "modality": "100M RASOS"
}

Para que uma competição de 100 metros rasos seja criada, o campo "modality" deste body deve ser enviado com o valor "100M RASOS" em caixa alta para ser aceito.
![inserindo 100m rasos](https://user-images.githubusercontent.com/91218096/160319727-d02a2bd4-6e65-4cb2-881b-ef40ee9fa3d2.png)

A resposta recebida deverá ser a seguinte: 
![resposta inserção 100m rasos](https://user-images.githubusercontent.com/91218096/160319918-3193a465-a997-4a0a-81c0-cdd93cbc8a4d.png)

Caso seja enviado um valor diferente do requerido em "modality" um erro será retornado com a mensagem "Invalid Modality".
![erro na modalidade](https://user-images.githubusercontent.com/91218096/160319918-3193a465-a997-4a0a-81c0-cdd93cbc8a4d.png)

## 1.2 Criar competição de Lançamento de Dardos
Para criar uma competição de Lançamento de Dardos é necessário usar o método POST e o endpoint "/competition/create", sendo necesário também enviar um body com os seguintes detalhes: 
{
    "name": "Nome da competição",
    "modality": "LANÇAMENTO DE DARDOS"
}

Para que uma competição de Lançamento de Dardos seja criada, o campo "modality" deste body deve ser enviado com o valor "LANÇAMENTO DE DARDOS" em caixa alta para ser aceito.
![inserindo 100m rasos](https://user-images.githubusercontent.com/91218096/160319727-d02a2bd4-6e65-4cb2-881b-ef40ee9fa3d2.png)

A resposta recebida deverá ser a seguinte: 
![resposta inserção 100m rasos](https://user-images.githubusercontent.com/91218096/160319918-3193a465-a997-4a0a-81c0-cdd93cbc8a4d.png)

Caso seja enviado um valor diferente do requerido em "modality" um erro será retornado com a mensagem "Invalid Modality".
![erro na modalidade](https://user-images.githubusercontent.com/91218096/160319918-3193a465-a997-4a0a-81c0-cdd93cbc8a4d.png)

## 2.1 Inserir um atleta e seu tempo numa competição de 100m rasos
Para inserir um atleta e seu tempo numa competição de 100m rasos é necessário usar o método POST e o endpoint "/meterDash/:id", sendo necessário também enviar o id da competição a qual se deseja adicionar as informações via params e um body com os seguintes detalhes:
{
    "athlete": "Nome do(a) atleta",
    "time": "tempo do atleta"
}

Para que estes dados sejam inseridos no sistema é necessário que o tempo com casas decimais seja separado por "." como exemplo "10.625", pode-se ver um exemplo do endpoint completo na imagem a seguir:
![inserir atleta 100m rasos](https://user-images.githubusercontent.com/91218096/160323242-c9bfd734-5e7c-4c8f-adfa-9bbdbcb3405b.png)
![inserir atleta 100m rasos 2](https://user-images.githubusercontent.com/91218096/160323410-a9d14cd9-e796-45a4-bd27-cf692f4baa63.png)

A resposta recebida deverá ser a seguinte:
![reposta 100mrasos inserção atleta](https://user-images.githubusercontent.com/91218096/160323539-f8814bca-cec8-4715-997c-8df4f18c302a.png)

Caso a competição em que se esteja tentando inserir os dados esteja encerrada, o seguinte erro aparecerá:
![erro inserção de atleta](https://user-images.githubusercontent.com/91218096/160323758-827cbb97-e02d-4567-bb04-c9da66c55717.png)

## 2.2 Inserir um atleta e a distância de seu arremesso em uma competição de Lançamento de Dardos
Para inserir um atleta e a distância de seu arremesso em uma competição de Lançamento de Dardos é necessário usar o método POST e o endpoint "/javelinThrow/:id", sendo necessário também enviar o id da competição a qual se deseja adicionar as informações via params e um body com os seguintes detalhes:
{
    "athlete": "Nome do(a) atleta",
    "distance": "A distância do arremeso"
}

Para que estes dados sejam inseridos no sistema é necessário que a distância com casas decimais seja separado por "." como exemplo "43.625", pode-se ver um exemplo do endpoint completo na imagem a seguir:
![inserção atleta dardos](https://user-images.githubusercontent.com/91218096/160324237-60c6ff0a-6915-49fd-a56f-eaee8a15daa6.png)
![inserção atleta dardos2](https://user-images.githubusercontent.com/91218096/160324605-286e74d8-8720-49db-9b33-8799bd766c39.png)

Lembrando que cada atleta pode ter 3 chances de arremesso inseridas no sistema!
Caso um quarto arremesso seja inserido um erro deve aparecer:

![erro 4 chances](https://user-images.githubusercontent.com/91218096/160326863-970b497b-1c08-44c4-bbc9-604de4c9243d.png)

A resposta recebida deverá ser a seguinte:
![resposta dardos](https://user-images.githubusercontent.com/91218096/160324693-dd28b752-3ea8-4348-a858-1582e4850078.png)

Caso a competição em que se esteja tentando inserir os dados esteja encerrada, o seguinte erro aparecerá:
![erro inserção de atleta](https://user-images.githubusercontent.com/91218096/160323758-827cbb97-e02d-4567-bb04-c9da66c55717.png)

## 3 Encerrar uma competição
Para encerrar uma competição de qualquer modalidade é necessário utilizar método PUT e o endpoint "/competition/end", sendo necessário também enviar um body com o id da competição a ser encerrada como o exemplo a seguir:
![encerrar competição](https://user-images.githubusercontent.com/91218096/160325584-f6014c6d-ba77-4ccf-8fa4-40fec0bf2c91.png)

Caso os dados estejam corretos a resposta recebida deverá ser a seguinte:
![erro encerra competição](https://user-images.githubusercontent.com/91218096/160325669-6a83046a-f3ab-493c-a377-65ef861a90a0.png)

## 4 Ranking das competições
Para acessar os resultados parciais ou finais das competições é necessário usar o método get e o endpoint "/competition/rankings/:id", sendo o id da competição enviado via params, como o exemplo a seguir:
![rankings enpoint](https://user-images.githubusercontent.com/91218096/160326095-cc4d954f-521b-46fc-8e69-ce29bd2740ad.png)

Caso o id esteja correto a resposta deverá ser a seguinte:
![ranking](https://user-images.githubusercontent.com/91218096/160326200-707d7684-5c98-4cff-ac31-e97700d68500.png)

Sendo o resultado mostrado acima identificado da seguinte maneira, onde o primeiro objeto é o atleta vencedor, o segundo atleta esta no segundo objeto na sequência do vetor e assim por diante.
![vencedor](https://user-images.githubusercontent.com/91218096/160326532-6debcff9-a7d3-4c37-8077-4f1df851b16e.jpg)

## Criar as Tabelas no mySQL
Para isso basta executar o script "migrations" da seguinte forma através do terminal:

![script migrations](https://user-images.githubusercontent.com/91218096/160712116-e81e342c-c21d-44db-9932-f7759232b3ee.png)

