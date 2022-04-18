DROP TABLE IF EXISTS tournaments CASCADE;

CREATE TABLE tournaments(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  sport_id INTEGER REFERENCES sports(id) NOT NULL,
  number_of_players INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  number_of_matches INTEGER
);