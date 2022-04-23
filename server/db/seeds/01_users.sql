-- seeds/01_users.sql
-- users seeds
<<<<<<< HEAD
INSERT INTO users (name, email, password) VALUES ('Francis', 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (name, email, password) VALUES ('Billy', 'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (name, email, password) VALUES ('Jacob', 'link@yahoo.com', 'hyrule');
INSERT INTO users (name, email, password) VALUES ('Sally', 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (name, email, password) VALUES ('Samantha', 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (name, email, password) VALUES ('Tommy', 'mario@mushroomkindom.jp', 'plumber79');


INSERT INTO sports (name, image) VALUES ('Basketball','https://media.istockphoto.com/photos/basketball-picture-id170096587?k=20&m=170096587&s=612x612&w=0&h=Umu6ELi7aPSpCPE7hMPKWVYZUoRfdNek2ieBI5RrCCs=');
INSERT INTO sports (name, image) VALUES ('Baseball','https://cdn.britannica.com/53/212553-050-E4A98496/Baseball-bat.jpg');
INSERT INTO sports (name, image) VALUES ('Tennis','https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=1200&height=630');
INSERT INTO sports (name, image) VALUES ('Soccer','https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg');
=======
INSERT INTO users (id, name, email, password, image) VALUES (1,'Francis', 'rick.sandchez@gmail.com', 'picklerick', 'https://i.ibb.co/2K2t3dx/man-1.png');
INSERT INTO users (id, name, email, password, image) VALUES (2,'Billy', 'lisa.simpson@gmail.com', 'ehhhhh', 'https://i.ibb.co/4fXJ7wy/man-2.png');
INSERT INTO users (id, name, email, password, image) VALUES (3,'Jacob', 'link@yahoo.com', 'hyrule', 'https://i.ibb.co/stzdDNx/man-3.png');
INSERT INTO users (id, name, email, password, image) VALUES (4,'Sally', 'simon_bel123@mail.ca', 'dracula', 'https://i.ibb.co/P5YW8Px/woman-1.png');
INSERT INTO users (id, name, email, password, image) VALUES (5,'Samantha', 'all_might@academia.jp', 'plusUltra', 'https://i.ibb.co/kgz48Tt/woman-2.png');
INSERT INTO users (id, name, email, password, image) VALUES (6,'Jane', 'mario@mushroomkindom.jp', 'plumber79', 'https://i.ibb.co/z7ZvyyM/woman-3.png');


INSERT INTO sports (name, image) VALUES ('Basketball','https://i.ibb.co/ss12BS4/icon-basketball.png');
INSERT INTO sports (name, image) VALUES ('Baseball','https://i.ibb.co/cXQFnxb/icon-baseball2.png');
INSERT INTO sports (name, image) VALUES ('Tennis','https://i.ibb.co/SXwc3Sx/icon-tennis3.png');
INSERT INTO sports (name, image) VALUES ('Soccer','https://i.ibb.co/dBVC83R/icon-soccer.png');
>>>>>>> 40d372369a418119d4be6642cb7665c3e17ff45c

INSERT INTO teams (name, sport_id) VALUES ('Team1', 1);
INSERT INTO teams (name, sport_id) VALUES ('Team2', 2);
INSERT INTO teams (name, sport_id) VALUES ('Team3', 3);
INSERT INTO teams (name, sport_id) VALUES ('Team4', 4);

INSERT INTO team_member (user_id, team_id) VALUES (1, 1);
INSERT INTO team_member (user_id, team_id) VALUES (1, 2);
INSERT INTO team_member (user_id, team_id) VALUES (2, 1);
INSERT INTO team_member (user_id, team_id) VALUES (2, 2);

INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('tournament1', 2, 8, 'single');
INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('tournament2', 3, 6, 'single');
INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('tournament3', 4, 8, 'single');
INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('tournament4', 1, 6, 'single');

INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (1, 1, '2022-04-01T08:00:00.000Z', 'Baltimore');
INSERT INTO matches (sport_id, match_date, match_location) VALUES (1, '2022-05-01T08:00:00.000Z', 'Toronto');
INSERT INTO matches (sport_id, match_date, match_location) VALUES (2, '2022-05-01T08:00:00.000Z', 'Park');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (2, 4, '2022-05-01T08:00:00.000Z', 'New York');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (3, 3, '2022-05-01T08:00:00.000Z', 'Elkridge');


INSERT INTO match_player (user_id, match_id, win) VALUES (1, 1, true);
INSERT INTO match_player (user_id, match_id, win) VALUES (2, 1, false);
INSERT INTO match_player (user_id, match_id) VALUES (1, 2);
INSERT INTO match_player (user_id, match_id) VALUES (2, 2);

INSERT INTO user_sport (user_id, sport_id) VALUES (1, 1);
INSERT INTO user_sport (user_id, sport_id) VALUES (1, 2);
INSERT INTO user_sport (user_id, sport_id) VALUES (2, 1);
INSERT INTO user_sport (user_id, sport_id) VALUES (2, 2);
INSERT INTO user_sport (user_id, sport_id) VALUES (3, 1);
INSERT INTO user_sport (user_id, sport_id) VALUES (4, 2);
INSERT INTO user_sport (user_id, sport_id) VALUES (5, 3);
INSERT INTO user_sport (user_id, sport_id) VALUES (6, 3);
INSERT INTO user_sport (user_id, sport_id) VALUES (6, 4);

INSERT INTO match_team (team_id, match_id, win) VALUES (1, 4, true);
INSERT INTO match_team (team_id, match_id, win) VALUES (2, 4, true);
INSERT INTO match_team (team_id, match_id) VALUES (1, 5);
INSERT INTO match_team (team_id, match_id) VALUES (2, 5);
