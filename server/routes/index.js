const express = require('express');
//Importando a rota de usuários.
const user = require('./user');
const router = express.Router();

//Rota para validarmos se a api está atualizada.
router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);


//Configurando e mapeand a rota de usuarios. 
router.use('/user', user);

module.exports = router;