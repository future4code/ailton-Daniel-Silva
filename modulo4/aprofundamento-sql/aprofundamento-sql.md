```

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

```