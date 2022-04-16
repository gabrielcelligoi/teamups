-- seeds/01_users.sql
-- users seeds
INSERT INTO users (id, name, email, password) VALUES (1,'Francis', 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (id, name, email, password) VALUES (2,'Billy', 'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (id, name, email, password) VALUES (3,'Jacob', 'link@yahoo.com', 'hyrule');
INSERT INTO users (id, name, email, password) VALUES (4,'Sally', 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (id, name, email, password) VALUES (5,'Samantha', 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (id, name, email, password) VALUES (6,'Tommy', 'mario@mushroomkindom.jp', 'plumber79');


INSERT INTO sports (name, image) VALUES ('Basketball','https://media.istockphoto.com/photos/basketball-picture-id170096587?k=20&m=170096587&s=612x612&w=0&h=Umu6ELi7aPSpCPE7hMPKWVYZUoRfdNek2ieBI5RrCCs=');
INSERT INTO sports (name, image) VALUES ('Baseball','https://cdn.britannica.com/53/212553-050-E4A98496/Baseball-bat.jpg');
INSERT INTO sports (name, image) VALUES ('Tennis','https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=1200&height=630');
INSERT INTO sports (name, image) VALUES ('Soccer','https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg');

INSERT INTO teams (name, sport_id) VALUES ('Team1', 1);
INSERT INTO teams (name, sport_id) VALUES ('Team2', 2);
INSERT INTO teams (name, sport_id) VALUES ('Team3', 3);
INSERT INTO teams (name, sport_id) VALUES ('Team4', 4);

INSERT INTO team_member (user_id, team_id) VALUES (1, 1);
INSERT INTO team_member (user_id, team_id) VALUES (1, 2);
INSERT INTO team_member (user_id, team_id) VALUES (2, 1);
INSERT INTO team_member (user_id, team_id) VALUES (2, 2);

INSERT INTO tournaments (name) VALUES ('tournament1');
INSERT INTO tournaments (name) VALUES ('tournament2');
INSERT INTO tournaments (name) VALUES ('tournament3');
INSERT INTO tournaments (name) VALUES ('tournament4');

INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (1, 1, '2022-04-01T08:00:00.000Z', 'Baltimore');
INSERT INTO matches (sport_id, match_date, match_location) VALUES (1, '2022-05-01T08:00:00.000Z', 'Toronto');
INSERT INTO matches (sport_id, match_date, match_location) VALUES (2, '2022-05-01T08:00:00.000Z', 'Park');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (2, 2, '2022-05-01T08:00:00.000Z', 'New York');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (2, 2, '2022-05-01T08:00:00.000Z', 'Elkridge');


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
