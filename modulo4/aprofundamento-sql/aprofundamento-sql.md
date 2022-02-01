### Exercício 1
a) Este comando excluiria a coluna salary da tabela Actor.

b) Este comando substitui a coluna gender, por uma nova declaração de 
coluna, chamada sex do tipo varchar(6).

c) Este comando redeclara a coluna gender com o tipo carchar(255).

### Exercício 2
a) 
### UPDATE Actor SET name = "Moacyr Franco", birth_date = "1936-10-05"
### WHERE id = "003";

b) 
### UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
### UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

c)
### UPDATE Actor Set name = "Fulane de Tal", birth_date = "2022-02-01",
### salary = 1000000, gender = "male" WHERE id = "005";

d) Ele executa o comando, porém diz que nada foi afetado e nada foi 
mudado.

### Exercício 3
a) 
### DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)
### DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4
a)
### SELECT MAX (salary) From Actor;

b) 
### SELECT MIN (salary) From Actor WHERE gender = "female";

c) 
### SELECT COUNT(*) From Actor WHERE gender = "female";

d)
### SELECT SUM(salary) From Actor

### Exercício 5

a) O COUNT retornou a contagem de acordo com o parametro gender, ou seja 2 male e 3 female

b) 
### SELECT id, name FROM Actor WHERE gender = "male" ORDER BY name DESC;

c)
### SELECT * FROM Actor ORDER BY salary;

d)
### SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) 
### SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercício 6
a)
### ALTER TABLE Movies ADD playing_limit_date DATE;

b)
### ALTER TABLE Movies CHANGE rating rating float;

c) 
### UPDATE Movies SET playing_limit_date = "2022-02-05" Where id = "002";
### UPDATE Movies SET playing_limit_date = "2020-05-02" Where id = "003";

d) Houve a execução do comando, mas houve zero mudanças e zero itens afetados.
