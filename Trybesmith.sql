DROP SCHEMA IF EXISTS railway;
CREATE SCHEMA IF NOT EXISTS railway;

CREATE TABLE railway.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE railway.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES railway.Users (id)
);

CREATE TABLE railway.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES railway.Orders (id)
);

INSERT INTO
  railway.Users (username, classe, level, password)
VALUES
  ("reigal", "Guerreiro", 10, "1dragaonoceu");

INSERT INTO
  railway.Users (username, classe, level, password)
VALUES
  ("vyrion", "Inventor", 8, "pagandodividas");

INSERT INTO
  railway.Users (username, classe, level, password)
VALUES
  ("yraa", "Ladina", 5, "valarmorg");

INSERT INTO
  railway.Orders (userId)
VALUES
  (1);

INSERT INTO
  railway.Orders (userId)
VALUES
  (3);

INSERT INTO
  railway.Orders (userId)
VALUES
  (2);

INSERT INTO
  railway.Products (name, amount)
VALUES
  ("Espada curta", "10 peças de ouro");

INSERT INTO
  railway.Products (name, amount, orderId)
VALUES
  (
    "Escudo desnecessariamente grande",
    "20 peças de ouro",
    1
  );

INSERT INTO
  railway.Products (name, amount, orderId)
VALUES
  ("Adaga de Aço Valírico", "1 peça de ouro", 2);

INSERT INTO
  railway.Products (name, amount, orderId)
VALUES
  ("Colar de fogo", "1 peça de ouro", 2);

INSERT INTO
  railway.Products (name, amount, orderId)
VALUES
  ("Engenhoca aleatória", "15 peças de ouro", 3);
