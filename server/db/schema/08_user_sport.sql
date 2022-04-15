DROP TABLE IF EXISTS user_sport CASCADE;

CREATE TABLE user_sport(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  sport_id INTEGER REFERENCES sports(id) NOT NULL  
);