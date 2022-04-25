DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  conversation_id INTEGER REFERENCES conversations(id),
  sender VARCHAR(255),
  message_txt VARCHAR(255),
  message_date TIMESTAMP
);