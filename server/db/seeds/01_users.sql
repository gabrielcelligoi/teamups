-- seeds/01_users.sql
-- users seeds

INSERT INTO users (name, email, password, image, sports) VALUES ('Francis', 'rick.sandchez@gmail.com', 'picklerick', 'https://i.ibb.co/2K2t3dx/man-1.png', ARRAY [1, 2]);
INSERT INTO users (name, email, password, image, sports) VALUES ('Billy', 'lisa.simpson@gmail.com', 'ehhhhh', 'https://i.ibb.co/4fXJ7wy/man-2.png', ARRAY [1, 3]);
INSERT INTO users (name, email, password, image, sports) VALUES ('Jacob', 'link@yahoo.com', 'hyrule', 'https://i.ibb.co/stzdDNx/man-3.png', ARRAY [2]);
INSERT INTO users (name, email, password, image, sports) VALUES ('Sally', 'simon_bel123@mail.ca', 'dracula', 'https://i.ibb.co/P5YW8Px/woman-1.png', ARRAY [1, 4]);
INSERT INTO users (name, email, password, image, sports) VALUES ('Samantha', 'all_might@academia.jp', 'plusUltra', 'https://i.ibb.co/kgz48Tt/woman-2.png', ARRAY [2, 3]);
INSERT INTO users (name, email, password, image, sports) VALUES ('Jane', 'mario@mushroomkindom.jp', 'plumber79', 'https://i.ibb.co/z7ZvyyM/woman-3.png', ARRAY [3, 4]);


INSERT INTO sports (name, image) VALUES ('Basketball','https://i.ibb.co/ss12BS4/icon-basketball.png');
INSERT INTO sports (name, image) VALUES ('Baseball','https://i.ibb.co/cXQFnxb/icon-baseball2.png');
INSERT INTO sports (name, image) VALUES ('Tennis','https://i.ibb.co/SXwc3Sx/icon-tennis3.png');
INSERT INTO sports (name, image) VALUES ('Soccer','https://i.ibb.co/dBVC83R/icon-soccer.png');

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

INSERT INTO conversations (sender_id, receiver_id) VALUES (1, 2);

INSERT INTO messages (conversation_id, sender_id, message_txt) VALUES (1, 2, 'Hey! How is it going?');