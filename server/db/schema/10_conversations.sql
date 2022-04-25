DROP TABLE IF EXISTS conversations CASCADE;

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  user1 VARCHAR(255),
  user2 VARCHAR(255),
  conversation_date TIMESTAMP
);