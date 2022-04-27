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

INSERT INTO teams (name, sport_id) VALUES ('The Hobbits', 1);
INSERT INTO teams (name, sport_id) VALUES ('Riders of Rohan', 2);
INSERT INTO teams (name, sport_id) VALUES ('Stewards of Gondor', 3);
INSERT INTO teams (name, sport_id) VALUES ('Elves of Rivendell', 4);

INSERT INTO team_member (user_id, team_id) VALUES (1, 1);
INSERT INTO team_member (user_id, team_id) VALUES (1, 2);
INSERT INTO team_member (user_id, team_id) VALUES (2, 1);
INSERT INTO team_member (user_id, team_id) VALUES (2, 2);
INSERT INTO team_member (user_id, team_id) VALUES (3, 3);
INSERT INTO team_member (user_id, team_id) VALUES (4, 3);
INSERT INTO team_member (user_id, team_id) VALUES (5, 4);
INSERT INTO team_member (user_id, team_id) VALUES (6, 4);


INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('Mordor Mayhem', 1, 8, 'single');
INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('Ultimate Baseball', 2, 6, 'single');
INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('FIFA', 4, 8, 'single');
INSERT INTO tournaments (name, sport_id, number_of_players, type) VALUES ('Tennis Tourney', 3, 6, 'single');

INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (1, 1, '2022-04-01T08:00:00.000Z', 'Baltimore');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (1, 1, '2022-05-01T08:00:00.000Z', 'Baltimore');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (1, 1, '2022-06-01T08:00:00.000Z', 'Baltimore');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (1, 1, '2022-07-01T08:00:00.000Z', 'Baltimore');
INSERT INTO matches (sport_id, match_date, match_location) VALUES (1, '2022-05-01T08:00:00.000Z', 'Toronto');
INSERT INTO matches (sport_id, match_date, match_location) VALUES (2, '2022-05-01T08:00:00.000Z', 'Park');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (2, 2, '2022-05-01T08:00:00.000Z', 'New York');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (3, 4, '2022-05-01T08:00:00.000Z', 'Elkridge');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (3, 4, '2022-06-01T08:00:00.000Z', 'Elkridge');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (3, 4, '2022-07-01T08:00:00.000Z', 'Elkridge');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (3, 4, '2022-08-01T08:00:00.000Z', 'Elkridge');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (4, 3, '2022-09-01T08:00:00.000Z', 'Elkridge');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (4, 3, '2022-10-01T08:00:00.000Z', 'Elkridge');
INSERT INTO matches (tournament_id, sport_id, match_date, match_location) VALUES (4, 3, '2023-04-01T08:00:00.000Z', 'Elkridge');


INSERT INTO match_player (user_id, match_id, win) VALUES (1, 1, true);
INSERT INTO match_player (user_id, match_id, win) VALUES (2, 1, false);
INSERT INTO match_player (user_id, match_id) VALUES (1, 2);
INSERT INTO match_player (user_id, match_id) VALUES (2, 2);
INSERT INTO match_player (user_id, match_id) VALUES (3, 3);
INSERT INTO match_player (user_id, match_id) VALUES (4, 3);
INSERT INTO match_player (user_id, match_id) VALUES (5, 4);
INSERT INTO match_player (user_id, match_id) VALUES (6, 4);
INSERT INTO match_player (user_id, match_id) VALUES (1, 5);
INSERT INTO match_player (user_id, match_id) VALUES (2, 5);
INSERT INTO match_player (user_id, match_id) VALUES (3, 6);
INSERT INTO match_player (user_id, match_id) VALUES (4, 6);
INSERT INTO match_player (user_id, match_id) VALUES (5, 7);
INSERT INTO match_player (user_id, match_id) VALUES (6, 7);
INSERT INTO match_player (user_id, match_id) VALUES (1, 8);
INSERT INTO match_player (user_id, match_id) VALUES (2, 8);
INSERT INTO match_player (user_id, match_id) VALUES (3, 9);
INSERT INTO match_player (user_id, match_id) VALUES (4, 9);
INSERT INTO match_player (user_id, match_id) VALUES (5, 10);
INSERT INTO match_player (user_id, match_id) VALUES (6, 10);
INSERT INTO match_player (user_id, match_id) VALUES (1, 11);
INSERT INTO match_player (user_id, match_id) VALUES (2, 11);
INSERT INTO match_player (user_id, match_id) VALUES (3, 12);
INSERT INTO match_player (user_id, match_id) VALUES (4, 12);
INSERT INTO match_player (user_id, match_id) VALUES (5, 13);
INSERT INTO match_player (user_id, match_id) VALUES (6, 13);
INSERT INTO match_player (user_id, match_id) VALUES (1, 14);
INSERT INTO match_player (user_id, match_id) VALUES (2, 14);




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

INSERT INTO messages (message_to, message_text, message_from) VALUES (1, 'hey', 2);
INSERT INTO messages (message_to, message_text, message_from) VALUES (1, 'whats up', 2);
INSERT INTO messages (message_to, message_text, message_from) VALUES (1, 'hows it going', 2);
INSERT INTO messages (message_to, message_text, message_from) VALUES (1, 'lets play some baseball', 2);
INSERT INTO messages (message_to, message_text, message_from) VALUES (2, 'soccer?', 5);
INSERT INTO messages (message_to, message_text, message_from) VALUES (3, 'when is the game', 2);
INSERT INTO messages (message_to, message_text, message_from) VALUES (4, 'see you soon', 5);