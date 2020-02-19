const { Sequelize } = require("sequelize");

const databaseConfig = {
  name: "promoapi",
  user: "alex42",
  password: "alex42"
};

const db = new Sequelize(
  databaseConfig.name,
  databaseConfig.user,
  databaseConfig.password,
  { dialect: "postgres" }
);

module.exports = db;
