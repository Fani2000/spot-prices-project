import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'workshops_db',
  username: 'postgres',
  password: 'postgres_password',
  host: 'localhost', // Change if using Docker
  dialect: 'postgres',
  models: [__dirname + '/../models'], // Automatically loads models
});
