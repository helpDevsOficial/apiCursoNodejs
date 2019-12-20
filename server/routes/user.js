const express = require('express');
//importando o controller de usuários
const user = require('../controller/user');

const router = express.Router();

//Rota para buscar todos os usuários cadastrados
router.route('/').get(user.getAll);

//Rota para buscar um usuário por ID 
router.route('/:id').get(user.get);

//Rota para cadastrar um usuário
router.route('/').post(user.post);

//Rota para editar um usuário 
router.route('/').put(user.put);

//Rota para Deletar um usuário
router.route('/:id').delete(user.del);

module.exports = router;
