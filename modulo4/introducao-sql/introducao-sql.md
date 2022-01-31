# Exercicios Introdução SQL

### Exercício 1
a) O comando CREATE TABLE está criando a tabela actor, que possui um id do tipo varchar com
o uma string de no máximo de 255 caracteres, name do mesmo tipo, birth_date do tipo DATE 
que representa uma data e gender que é varchar também, porém com o máximo de 6 carácteres.

b) SHOW DATABASES: este comando mostra todas as databases ou "schemas" disponíveis.
SHOW TABLES: mostra todas as tabelas contidas nesta database.

c) o comando DESCRIBE retornou todos os nomes, tipos e demais informações sobre a construção 
e estrutura da tabela Actors.

### Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female")

b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
Pois ele buscou o ID na tabela e viu que já havia alguém com o mesmo ID, por mais que 
informações diferentes.

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na 
linha 1.
A ferramenta buscou na matriz da tabela, colunas específicas, e como não encontrou coluna
tal para colocar informação tal, houve o erro. 

### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19",   "female");

d) Código de erro: 1364. O campo 'nome' não tem um valor padrão
A ferramenta buscou as colunas, as encontrou, exceto a coluna 'name', não encontrou também 
um valor para acrescentar a tais colunas, daí o erro.

### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES("004", "Antônio  Fagundes", 400000, "1949-04-18", "male");

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
Como a coluna de data de nascimento foi programada para receber apenas varchar, a mesma não pode receber números inteiros.

### INSERT INTO Actor (id, name, salary, birth_date, gender)
### VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

### Ecercício 3
a) 
### SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

b)
### SELECT salary from Actor WHERE name = "Tony Ramos";

c) como nehuma das entradas na tabela possui gender "invalid" ou gender que não seja um valor válido, ele retornou null, pois não encontrou nada.

d)
### SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
Este erro ocorreu, pois não há um campo 'nome' declarado para a tabela, mas sim 'name'.

### SELECT id, name from Actor WHERE id = "002";

### Exercício 4
a) está verificando se há nomes que comecem com a ou j, ao mesmo tempo que tenha salário maior que 300000. Os parênteses servem para separar as lógicas, se não o and seria incorporado aa pesquisa do J.

b) 
### SELECT * FROM Actor
### WHERE name NOT LIKE "A%" AND salary > 350000;

C) 
### SELECT * FROM Actor
### WHERE (name LIKE "%G%" OR name LIKE "%g%");

d) 
### SELECT * FROM Actor
### WHERE ((name LIKE "%G%" OR name LIKE "%g%") OR (name LIKE "%A%" OR name LIKE "%a%")) 
### AND (salary BETWEEN 350000 AND 900000 );

### Exercício 5
a) 
### CREATE TABLE Movies (id VARCHAR(255) PRIMARY KEY, title VARCHAR (255) NOT NULL,
### sinopsis TEXT NOT NULL, release_date DATE NOT NULL, rating INT NOT NULL);

b)
### INSERT INTO Movies (id, title, sinopsis, release_date, rating)
### VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e
### enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável 
### e trocam de corpos", "2006-01-06", 7);

### Exercício 6
a) 
### SELECT id, title, rating from Movies WHERE id = "004";

b)
### SELECT id, title, rating from Movies WHERE title = "O Auto da Compadecida";

c) 
### SELECT id, title, sinopsis from Movies WHERE rating > 7 ;

### Exercício 7
a)
### SELECT * FROM Movies WHERE (title LIKE "%vida%");

b)
### SELECT * FROM Movies WHERE (title LIKE "%mãe%") OR (sinopsis LIKE "%mãe%");

c) 
### SELECT * FROM Movies WHERE release_date < "2022-01-31";

d) 
### SELECT * FROM Movies WHERE (release_date < "2022-01-31") AND ((title LIKE "%mãe%") OR 
### (sinopsis LIKE "%mãe%")) AND (rating > 7);