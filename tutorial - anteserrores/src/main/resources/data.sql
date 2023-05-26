INSERT INTO category(name) VALUES ('Eurogames');
INSERT INTO category(name) VALUES ('Ameritrash');
INSERT INTO category(name) VALUES ('Familiar');

INSERT INTO author(name, nationality) VALUES ('Alan R. Moon', 'US');
INSERT INTO author(name, nationality) VALUES ('Vital Lacerda', 'PT');
INSERT INTO author(name, nationality) VALUES ('Simone Luciani', 'IT');
INSERT INTO author(name, nationality) VALUES ('Perepau Llistosella', 'ES');
INSERT INTO author(name, nationality) VALUES ('Michael Kiesling', 'DE');
INSERT INTO author(name, nationality) VALUES ('Phil Walker-Harding', 'US');

INSERT INTO game(title, age, category_id, author_id) VALUES ('On Mars', '14', 1, 2);
INSERT INTO game(title, age, category_id, author_id) VALUES ('Aventureros al tren', '8', 3, 1);
INSERT INTO game(title, age, category_id, author_id) VALUES ('1920: Wall Street', '12', 1, 4);
INSERT INTO game(title, age, category_id, author_id) VALUES ('Barrage', '14', 1, 3);
INSERT INTO game(title, age, category_id, author_id) VALUES ('Los viajes de Marco Polo', '12', 1, 3);
INSERT INTO game(title, age, category_id, author_id) VALUES ('Azul', '8', 3, 5);
INSERT INTO game(title, age, category_id, author_id) VALUES ('Welcome to the Neighborhood', '10', 3, 6);

INSERT INTO client(name) VALUES ('Client 1');
INSERT INTO client(name) VALUES ('Client 2');
INSERT INTO client(name) VALUES ('Client 3');

INSERT INTO lending (game_id, client_id, start_lending_date, finish_lending_date) VALUES (1, 1, '2023-05-11', '2023-05-12');
INSERT INTO lending (game_id, client_id, start_lending_date, finish_lending_date) VALUES (2, 2, '2023-05-13', '2023-05-14');
INSERT INTO lending (game_id, client_id, start_lending_date, finish_lending_date) VALUES (3, 3, '2023-05-17', '2023-05-20');
INSERT INTO lending (game_id, client_id, start_lending_date, finish_lending_date) VALUES (6, 3, '2023-05-15', '2023-05-20');
INSERT INTO lending (game_id, client_id, start_lending_date, finish_lending_date) VALUES (4, 3, '2023-05-21', '2023-05-31');

