//Exercícios de interpretação de código:
//Exercício 1:
//a) O código recebe um número do usuário e realiza um teste dividindo o número inserido por 2 e pegando o resto desta divisão para ver se é zero 
//ou não, é um teste para saber se o número é par ou não. 
//b)Ele imprimirá "Passou no teste" para todos os números pares.
//c)Ele imprimirá "Não passou no teste" para todos os números ímpares.

//Exercício 2:
//a)O código serve para reazliar a consulta de preço de algumas frutas. 
//b)Será impresso: "O preço da fruta Maçã é R$ 2.25".
//c)O código não conseguiria sair do bloco que está sendo executado, sendo assim, o programa iria para o próximo "case" implicando que o valor da variável preco = 5
//e o preço da Pêra que seria impresso, seria o de R$ 5.

//Exercício 3:
//a)A primeira linha do código recebe um número através do comando prompt e já transforma esta string em um número com o comando Number(), inserindo
//este número na váriavel "numero".
//b)Será impresso o seguinte no terminal se o número inserido for 10:
//  Esse número passou no teste
// Se for inserido -10 nada será impresso no terminal.
//c)Provavelmente sim, já que a váriavel mensagem esta sendo declarada no bloco de execução da condicional em questão, mas não em um escopo ou bloco global, sendo assim, 
//só o próprio bloco tem acesso a esta váriavel. Para o programa funcionar a váriavel deveria ser declarada antes deste bloco e depois modificada por ele.

//Exercício de escrita de código:
//Exercício 1:
const idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18){
        console.log("Você pode dirigir");
    }else {
        console.log("Você não pode dirigir");
    }

//Exercício 2:
const turno = prompt("Insira qual turno você estuda, M (matutino) ou V (Vespertino) ou N (Noturno)").toLocaleLowerCase()

if (turno === "m"){
        console.log("Bom Dia!")
    }else if (turno === "v"){
                   console.log("Boa Tarde!") 
            }else {
                        console.log("Boa Noite!")
                }

//Exercício 3:
const turno1 = prompt("Insira qual turno você estuda, M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()


switch (turno1){
    case 'M':
        console.log('Bom Dia!');
        break;
    case 'V':
        console.log('Boa Tarde!');
        break;    
    case 'N':
        console.log('Boa Noite!');   
        break; 
}

//Exercício 4:
const generoDoFilme = prompt("Qual o genêro do filme?").toLowerCase();
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if ((generoDoFilme === "fantasia")&&(precoIngresso < 15)){
        console.log("Bom filme!");
    }else {
        console.log("Escolha outro filme :(");
        }

//Desafio 1:
const generoDoFilme = prompt("Qual o genêro do filme?").toLowerCase();
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if ((generoDoFilme === "fantasia")&&(precoIngresso < 15)){
    const snack = prompt("Qual snack você vai comrpar?");    
    console.log("Bom filme!");
    console.log("Aproveite seu", snack);
    }else {
        console.log("Escolha outro filme :(");
        }

//Desafio 2:
const nome = prompt("Informe o nome completo");
const tipoDoJogo = prompt("informe o tipo do jogo, IN indica internacional e DO indica doméstico").toLowerCase();
const etapaDoJogo = prompt("informe a etapa do jogo, (SF = semi-final, DT = decisão de terceiro lugar, FI = final").toLowerCase();
const categoria = Number(prompt("Informe a categoria (1 a 4)"));
const quantidadeDeIngresso = Number(prompt("Informe a quantidade de ingressos"));

if (tipoDoJogo === "do"){
        switch (etapaDoJogo){
            case 'sf':
                if(categoria === 1){
                    console.log(`
                    ---Dados da compra
                    Nome do cliente: ${nome}
                    Etapa do jogo: Semi-final
                    Categoria: ${categoria}
                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                    ---Valores---
                    Valor do ingresso: R$ 1320
                    valor total: ${1320 * quantidadeDeIngresso}
                    `);
                    }else if (categoria === 2){
                            console.log(`
                            ---Dados da compra
                            Nome do cliente: ${nome}
                            Etapa do jogo: Semi-final
                            Categoria: ${categoria}
                            Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                            ---Valores---
                            Valor do ingresso: R$ 880
                            valor total: ${880 * quantidadeDeIngresso}
                            `);
                            }else if (categoria === 3){
                                console.log(`
                                ---Dados da compra
                                Nome do cliente: ${nome}
                                Etapa do jogo: Semi-final
                                Categoria: ${categoria}
                                Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                ---Valores---
                                Valor do ingresso: R$ 550
                                valor total: ${550 * quantidadeDeIngresso}
                                `);
                                }else{
                                    console.log(`
                                    ---Dados da compra
                                    Nome do cliente: ${nome}
                                    Etapa do jogo: Semi-final
                                    Categoria: ${categoria}
                                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ 220
                                    valor total: ${220 * quantidadeDeIngresso}
                                    `);
                                    }
                                    break;
            case 'dt':
                if(categoria === 1){
                    console.log(`
                    ---Dados da compra
                    Nome do cliente: ${nome}
                    Etapa do jogo: Decisão de terceiro lugar
                    Categoria: ${categoria}
                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                    ---Valores---
                    Valor do ingresso: R$ 660
                    valor total: ${660 * quantidadeDeIngresso}
                    `);
                    }else if (categoria === 2){
                            console.log(`
                            ---Dados da compra
                            Nome do cliente: ${nome}
                            Etapa do jogo: Decisão de terceiro lugar
                            Categoria: ${categoria}
                            Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                            ---Valores---
                            Valor do ingresso: R$ 440
                            valor total: ${440 * quantidadeDeIngresso}
                            `);
                            }else if (categoria === 3){
                                console.log(`
                                ---Dados da compra
                                Nome do cliente: ${nome}
                                Etapa do jogo: Decisão de terceiro lugar
                                Categoria: ${categoria}
                                Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                ---Valores---
                                Valor do ingresso: R$ 330
                                valor total: ${330 * quantidadeDeIngresso}
                                `);
                                }else{
                                    console.log(`---Dados da compra
                                    Nome do cliente: ${nome}
                                    Etapa do jogo: Decisão de terceiro lugar
                                    Categoria: ${categoria}
                                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ 170
                                    valor total: ${170 * quantidadeDeIngresso}
                                    `);
                                    }
                                    break;
            case 'fi':
                if(categoria === 1){
                    console.log(`
                    ---Dados da compra
                    Nome do cliente: ${nome}
                    Etapa do jogo: Final
                    Categoria: ${categoria}
                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                    ---Valores---
                    Valor do ingresso: R$ 1980
                    valor total: ${1980 * quantidadeDeIngresso}
                    `);
                    }else if (categoria === 2){
                            console.log(`
                            ---Dados da compra
                            Nome do cliente: ${nome}
                            Etapa do jogo: Final
                            Categoria: ${categoria}
                            Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                            ---Valores---
                            Valor do ingresso: R$ 1320
                            valor total: ${1320 * quantidadeDeIngresso}
                            `);
                            }else if (categoria === 3){
                                console.log(`
                                ---Dados da compra
                                Nome do cliente: ${nome}
                                Etapa do jogo: Final
                                Categoria: ${categoria}
                                Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                ---Valores---
                                Valor do ingresso: R$ 880
                                valor total: ${880 * quantidadeDeIngresso}
                                `);
                                }else{
                                    console.log(`
                                    ---Dados da compra
                                    Nome do cliente: ${nome}
                                    Etapa do jogo: Final
                                    Categoria: ${categoria}
                                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                    ---Valores---
                                    Valor do ingresso: R$ 330
                                    valor total: ${330 * quantidadeDeIngresso}
                                    `);
                                    }
                                    break;

                            

        }
     }else if (tipoDoJogo === "in"){
        switch (etapaDoJogo){
            case 'sf':
                if(categoria === 1){
                    console.log(`
                    ---Dados da compra
                    Nome do cliente: ${nome}
                    Etapa do jogo: Semi-final
                    Categoria: ${categoria}
                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                    ---Valores---
                    Valor do ingresso: U$ ${1320 / 4.10}
                    valor total: ${(1320 * quantidadeDeIngresso) / 4.10}
                    `);
                    }else if (categoria === 2){
                            console.log(`
                            ---Dados da compra
                            Nome do cliente: ${nome}
                            Etapa do jogo: Semi-final
                            Categoria: ${categoria}
                            Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                            ---Valores---
                            Valor do ingresso: U$ ${880 / 4.10}
                            valor total: ${(880 * quantidadeDeIngresso)/ 4.10}
                            `);
                            }else if (categoria === 3){
                                console.log(`
                                ---Dados da compra
                                Nome do cliente: ${nome}
                                Etapa do jogo: Semi-final
                                Categoria: ${categoria}
                                Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                ---Valores---
                                Valor do ingresso: U$ ${550 / 4.10}
                                valor total: ${(550 * quantidadeDeIngresso)/ 4.10}
                                `);
                                }else{
                                    console.log(`
                                    ---Dados da compra
                                    Nome do cliente: ${nome}
                                    Etapa do jogo: Semi-final
                                    Categoria: ${categoria}
                                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                    ---Valores---
                                    Valor do ingresso: U$ ${220 / 4.10}
                                    valor total: ${(220 * quantidadeDeIngresso)/ 4.10}
                                    `);
                                    }
                                    break;
            case 'dt':
                if(categoria === 1){
                    console.log(`
                    ---Dados da compra
                    Nome do cliente: ${nome}
                    Etapa do jogo: Decisão de terceiro lugar
                    Categoria: ${categoria}
                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                    ---Valores---
                    Valor do ingresso: U$ ${660 / 4.10}
                    valor total: ${(660 * quantidadeDeIngresso)/ 4.10}
                    `);
                    }else if (categoria === 2){
                            console.log(`
                            ---Dados da compra
                            Nome do cliente: ${nome}
                            Etapa do jogo: Decisão de terceiro lugar
                            Categoria: ${categoria}
                            Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                            ---Valores---
                            Valor do ingresso: U$ ${440 / 4.10}
                            valor total: ${(440 * quantidadeDeIngresso)/ 4.10}
                            `);
                            }else if (categoria === 3){
                                console.log(`
                                ---Dados da compra
                                Nome do cliente: ${nome}
                                Etapa do jogo: Decisão de terceiro lugar
                                Categoria: ${categoria}
                                Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                ---Valores---
                                Valor do ingresso: U$ ${330 / 4.10}
                                valor total: ${(330 * quantidadeDeIngresso)/ 4.10}
                                `);
                                }else{
                                    console.log(`---Dados da compra
                                    Nome do cliente: ${nome}
                                    Etapa do jogo: Decisão de terceiro lugar
                                    Categoria: ${categoria}
                                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                    ---Valores---
                                    Valor do ingresso: U$ ${170 / 4.10}
                                    valor total: ${(170 * quantidadeDeIngresso)/ 4.10}
                                    `);
                                    }
                                    break;
            case 'fi':
                if(categoria === 1){
                    console.log(`
                    ---Dados da compra
                    Nome do cliente: ${nome}
                    Etapa do jogo: Final
                    Categoria: ${categoria}
                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                    ---Valores---
                    Valor do ingresso: U$ ${1980 / 4.10}
                    valor total: ${(1980 * quantidadeDeIngresso)/ 4.10}
                    `);
                    }else if (categoria === 2){
                            console.log(`
                            ---Dados da compra
                            Nome do cliente: ${nome}
                            Etapa do jogo: Final
                            Categoria: ${categoria}
                            Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                            ---Valores---
                            Valor do ingresso: U$ ${1320 / 4.10}
                            valor total: ${(1320 * quantidadeDeIngresso)/ 4.10}
                            `);
                            }else if (categoria === 3){
                                console.log(`
                                ---Dados da compra
                                Nome do cliente: ${nome}
                                Etapa do jogo: Final
                                Categoria: ${categoria}
                                Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                ---Valores---
                                Valor do ingresso: U$ ${880 / 4.10}
                                valor total: ${(880 * quantidadeDeIngresso)/ 4.10}
                                `);
                                }else{
                                    console.log(`
                                    ---Dados da compra
                                    Nome do cliente: ${nome}
                                    Etapa do jogo: Final
                                    Categoria: ${categoria}
                                    Quantidade do ingresso: ${quantidadeDeIngresso} ingressos
                                    ---Valores---
                                    Valor do ingresso: U$ ${330 / 4.10}
                                    valor total: ${(330 * quantidadeDeIngresso)/ 4.10}
                                    `);
                                    }
                                    break;

                            

        }

     }