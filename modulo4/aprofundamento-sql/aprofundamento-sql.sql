CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- Exercício 1
-- a) Para o id se usa o VARCHAR(255) que é para uma string com no máximo 255 caracteres e o PRIMARY KEY que não aceita 2 valores passados iguais

SHOW DATABASES;
SHOW TABLES;
-- b) O primeiro mostra as informações contidas no banco de dados e o segundo mostra especificamente as tabelas contidas no banco de dados.

DESCRIBE Actor;
-- c) É mostrada uma tabela descrevendo a tabela Actor, mostrando sua estrutura

-- Exercício 2 
-- a)	
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

-- b) O erro aconteceu pois foi tentando passar um valor duplicado para uma KEY PRIMARY, o que não é possível.

-- c) O erro aqui é que falta passar a entrade de alguns parâmetros: birth_date e gender
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- d) O erro aqui é que não foi definido um valor para "name" e nem passado o parâmetro como entrada.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Jô Soares",
  400000,
  "1949-04-18", 
  "male"
);

-- e) A data não estava sendo passada como string.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Lisa Vicari",
  719333.33,
  "1997-02-11", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Lázaro Ramos",
  719000,
  "1978-11-01", 
  "male"
);

-- Exercício 3 
-- a)
SELECT * FROM Actor WHERE gender = "female";

-- b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

-- c) Retornou todos valores null, pois não tem nenhum ator com gênero = "invalid"
SELECT * FROM Actor WHERE gender = "invalid";

-- d) 
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

-- e) Foi passado o parâmetro como "nome", na verdade é "name"
SELECT id, name from Actor WHERE id = "002";

-- Exercício 4
-- a) Utilizando o comparador LIKE e a sintaxe A% E J%, cria-se a parte da query que encontrar os atores(atrizes) que tem seus nome iniciados com as letras
-- A e J, e usa-se o salario > 300000 para encontrar os atores que tem salários acima desse valor. Utilizando o operador AND encontra-se os atores que atenderem
-- às duas condições.

-- b)
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

-- c) 
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

-- d) 
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND (salary > 350000 AND salary < 900000);

-- Exercício 5 
-- a) TEXT serve para armazenar textos mais longos
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    note FLOAT NOT NULL
);

-- b)
INSERT INTO Movies (id, title, synopsis, release_date, note)
VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

-- c) 
INSERT INTO Movies (id, title, synopsis, release_date, note)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

-- d)
INSERT INTO Movies (id, title, synopsis, release_date, note)
VALUES(
"003",
"Dona Flor e seus dois maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

-- e)
INSERT INTO Movies (id, title, synopsis, release_date, note)
VALUES(
"004",
"O auto da compadecida",
"No início dos anos 30, Chicó e João Grilo, dois pobres homens que vivem próximos da cidade de Taperoá na Paraíba, conseguem um emprego na padaria da cidade, onde moram o padeiro Eurico e sua esposa Dora, que vive sempre o traindo. Os patrões cuidam melhor de sua cadela de estimação do que dos seus empregados, oferecendo comida estragada para Chicó e João Grilo e bife passado na manteiga para sua cadela, causando constantes reclamações por parte de João.",
"2000-09-15",
10
);

-- Exercício 6
-- a)
SELECT id, title, note FROM Movies WHERE id = "004";

-- b)
SELECT * FROM Movies WHERE title = "Dona Flor e seus dois maridos";

-- c) 
SELECT id, title, synopsis FROM Movies WHERE note >= 7;

-- Exercício 7
-- a)
SELECT * FROM Movies WHERE (title LIKE "%vida%" OR title LIKE "%Vida%");

-- b) 
SELECT * FROM Movies WHERE (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%");

-- c) 
SELECT * FROM Movies WHERE release_date < CURDATE();

-- d) 
SELECT * FROM Movies WHERE release_date < CURDATE() AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%")	AND note >= 7;


-- APROFUNDAMENTO SQL

-- Exercício 1
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a) Apaga a coluna de salário
-- b) Troca o nome da coluna gender para sex, sendo uma VARCHAR de no máximo 6 caracteres
-- c) Troca a colune gênero para genêro, sendo um VARCHAR de no máximo 255 caracteres
-- d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2

-- a)
UPDATE Actor SET name = "Stenio Garcia", birth_date = "1932--04-28" WHERE id = "003";

-- b) 
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";

-- c)
UPDATE Actor SET id = "010", name = "Taynã Dias", salary = 100000, birth_date = "1992-12-15", gender = "female", type = "NotDirector" WHERE id = "005";

-- d) 0 linha(s) afetada(s), Linhas correspondidas: 0 Alterado: 0 Avisos: 0 (não aconteceu nenhuma alteração)
UPDATE Actor SET name = "Leilane Lourenço" WHERE id = "10928428409248294";

-- Exercício 3
SET SQL_SAFE_UPDATES = 0;

-- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b)

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- Exercício 4

-- a)
SELECT MAX(salary) as higher_salary FROM Actor;

-- b) 
SELECT MIN(salary) as lower_salary FROM Actor WHERE gender = "female";

-- c) 
SELECT COUNT(*) as actresses_number FROM Actor WHERE gender = "female";

-- d)
SELECT SUM(salary) as sum_salary FROM Actor;

-- Exercício 5 

-- a) Retornou o número de atrizes e atores que existem na tabela. São 4 atrizes e 2 atores.
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- b)
SELECT id, name FROM Actor ORDER BY name DESC;

-- c)
SELECT * FROM Actor ORDER BY salary ASC;

-- d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- e) 
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- Exercício 6

-- a) 
ALTER TABLE Movies ADD playing_limit_date DATE;

-- b)
ALTER TABLE Movies CHANGE note note FLOAT;

-- c)
UPDATE Movies SET playing_limit_date = "2022-01-31" WHERE id = "001";
UPDATE Movies SET playing_limit_date = "2023-01-31" WHERE id = "002";

-- d) Aconteceu 0 alterações
DELETE FROM Movies WHERE id = "003";
UPDATE Movies SET synopsis = "A vida é dura só pra quem é mole" WHERE id = "003";

-- Exercício 7 

-- a)
SELECT COUNT(*) as note_movies FROM Movies WHERE note > 7.5;

-- b) 
SELECT AVG(note) as average_note from Movies;

-- c) 
SELECT COUNT(*) as movies_intheaters FROM Movies WHERE playing_limit_date < "2023-01-31";

-- d)
SELECT COUNT(*) as movies_will_release FROM Movies WHERE release_date > CURDATE();

-- e)
SELECT MAX(note) as higher_note FROM Movies;

-- f)
SELECT MIN(note) as lower_note FROM Movies;

-- Exercício 8 

-- a) 
SELECT * FROM Movies ORDER BY title ASC;

-- b)
SELECT * FROM Movies ORDER BY title DESC LIMIT 5;

-- c)
SELECT * FROM Movies ORDER BY release_date DESC LIMIT 3;

-- d)
SELECT * FROM Movies ORDER BY note DESC LIMIT 3;