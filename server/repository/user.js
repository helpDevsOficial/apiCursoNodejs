const config = require('../config/env');
const user = require('../Model/user');
let obj = config.dataConfig.MYSQL;
const Sequelize = require('sequelize');

//Aqui estamos passando os dados para realizar a conexão com o banco de dados
const sequelize = new Sequelize(obj.database, obj.user, obj.password, {
  host: obj.host,
  port: obj.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//Validando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Método responsável por buscar um usuário de acordo com o id informado
async function get (id) {
  return await user.user(sequelize, Sequelize).findOne({
    where: {
      id: id
    }
  });
}

//Método responsável por buscar todos os usuários cadastrados 
async function getAll () {
  return await user.user(sequelize, Sequelize).findAll();
}

// Método responsável por adicionar um usuário
async function post (p) {
  await user.user(sequelize, Sequelize).create(p);
}

//Método responsável por editar um usuário
async function put (p) {
  await user.user(sequelize, Sequelize).update(p, { where: { id: p.id } });
}

//Método responsável por deleta um usuário pelo id
async function del (id) {
  await user.user(sequelize, Sequelize).destroy({ where: { id: id } });
}

//Aqui estamos exportando todos os métodos que criamos para que consigamos acessar eles de outros arquivos
module.exports = { get, getAll, post, put, del };
