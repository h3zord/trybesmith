/* eslint-disable max-lines-per-function */
import connection from './connection';

const setupDatabase = async () => {
  try {
    await connection.query('DROP SCHEMA IF EXISTS railway');
    await connection.query('CREATE SCHEMA IF NOT EXISTS railway');
    await connection.query(`
      CREATE TABLE railway.Users (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        username TEXT NOT NULL,
        classe TEXT NOT NULL,
        level INTEGER NOT NULL,
        password TEXT NOT NULL
      )
    `);
    await connection.query(`
      CREATE TABLE railway.Orders (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        userId INTEGER,
        FOREIGN KEY (userId) REFERENCES railway.Users (id)
      )
    `);
    await connection.query(`
      CREATE TABLE railway.Products (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        amount TEXT NOT NULL,
        orderId INTEGER,
        FOREIGN KEY (orderId) REFERENCES railway.Orders (id)
      )
    `);
    await connection.query(`
      INSERT INTO railway.Users (username, classe, level, password)
      VALUES ("reigal", "Guerreiro", 10, "1dragaonoceu"), 
             ("vyrion", "Inventor", 8, "pagandodividas"),
             ("yraa", "Ladina", 5, "valarmorg")
    `);
    await connection.query('INSERT INTO railway.Orders (userId) VALUES (1), (3), (2)');
    await connection.query(`
      INSERT INTO railway.Products (name, amount)
      VALUES ("Espada curta", "10 peças de ouro"),
             ("Engenhoca aleatória", "15 peças de ouro")
    `);
    await connection.query(`
      INSERT INTO railway.Products (name, amount, orderId)
      VALUES ("Escudo desnecessariamente grande", "20 peças de ouro", 1),
             ("Adaga de Aço Valírico", "1 peça de ouro", 2),
             ("Colar de fogo", "1 peça de ouro", 2)
    `);
    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await connection.end();
  }
};

setupDatabase();
