-- seeds/01_users.sql
-- users seeds
INSERT INTO users (id, name, email, password) VALUES (1,'Francis', 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (id, name, email, password) VALUES (2,'Billy', 'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (id, name, email, password) VALUES (3,'Jacob', 'link@yahoo.com', 'hyrule');
INSERT INTO users (id, name, email, password) VALUES (4,'Sally', 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (id, name, email, password) VALUES (5,'Samantha', 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (id, name, email, password) VALUES (6,'Tommy', 'mario@mushroomkindom.jp', 'plumber79');

INSERT INTO sports (name) VALUES ('Basketball');
INSERT INTO sports (name) VALUES ('Baseball');
INSERT INTO sports (name) VALUES ('Tennis');
INSERT INTO sports (name) VALUES ('Soccer');

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
