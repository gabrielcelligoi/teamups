DROP TABLE IF EXISTS matches CASCADE;

CREATE TABLE matches(
  id SERIAL PRIMARY KEY,
  tournament_id INTEGER REFERENCES tournaments(id),
  sport_id INTEGER REFERENCES sports(id) NOT NULL,
  match_date DATE,
  match_location VARCHAR(255) NOT NULL 
);

