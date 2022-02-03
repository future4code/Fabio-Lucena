## Exercício 1
a) Chave estrangeira é uma maneira de refernciar uma primary key de outra tabela, sendo assim indicando que o valor inserido em tal coluna de uma tabela, faz referência a uma chave existente
em outra tabela.

b)
### INSERT INTO Rating (id, comment, rate, movie_id)
### VALUES ("001", "É um filme muito bom, não sei por que, só sei que é assim.", 9.5, "004");
...

c)  O erro diz que não pode criar a avaliação, pois não existe a referência para uma primary key válida, literalmente que não existe um filme com o mesmo id para inserir, pois as duas tabelas estão diretamnte relacionadas.

d) 
### ALTER TABLE Movies DROP COLUMN rating;

e) Cannot delete or update a parent row: a foreign key constraint fails (`carver-fabio-jose-lucena-de-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Não foi possível excluir o filme com avaliação, pois a constraint Foreign Key da tabela Rating ainda está ligada na tablea de filmes.

## Exercício 2
a) Essa tabela possui apenas duas colunas, que estão atreladas às tabelas de atores e filmes através de chaves estrangeiras.

b)
### INSERT INTO MovieCast (movie_id, actor_id)
### VALUES ("003", "005");

c) a foreign key constraint fails (`carver-fabio-jose-lucena-de-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
O mesmo dos outros erros, como a chave estrangeira faz relação com outra tabela e torna obrigatória a coluna estar disponível e ter um valor válido, ao colocar qualquer valor inválido, a operação não é realizada.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-fabio-jose-lucena-de-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Como diz o erro, não é possível fazer qualquer coisa com uma linha que está ligada a outra tabela através de chaves estrangeiras, "constraint".

## Exercício 3
a) A query encontra partindo da tabela Movies, tudo o que está relacionado à ela, através de chaves estangeiras, juntando estes dados em uma única tabela. O operador ON serve para indicar qual condição de união das tabelas que serão unidas para a formação de uma tabela única com os dados solicitados.

b) 
### SELECT movie_id, rate FROM Movies INNER JOIN Rating ON Movies.id = Rating.id; 
