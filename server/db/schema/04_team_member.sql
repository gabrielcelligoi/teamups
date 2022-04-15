DROP TABLE IF EXISTS team_member CASCADE;

CREATE TABLE team_member (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  team_id INTEGER REFERENCES teams(id)
);