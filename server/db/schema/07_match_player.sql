DROP TABLE IF EXISTS match_player CASCADE;

CREATE TABLE match_player (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  match_id INTEGER REFERENCES matches(id) NOT NULL
);