//Aqui estamos importando o repositório de usuários 
const user = require('../repository/user');

//Método que busca todos os usuários 
async function getAll () {
  var users = await user.getAll();
  
  // Caso de algum problema vamos retornar o status code 400 com a mensagem Erro ao buscar os Usuários
  if (!users) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os Usuários'
    };
  }

  //Aqui retornamos os usuários encontrados no banco
  return users;
}

async function get (id) {
  // Aqui estamos buscando um usuário pelo id
  var usr = await user.get(id);

  // Aqui validamos se conseguimos encontrar o usuário pelo id que foi informado
  if (!usr) {
    return {
      statusCode: 400,
      msg: 'Erro: usuario não encontrado'
    };
  }

  //Aqui retornamos o usuário encontrado no banco
  return usr;
}

async function post (p) {
  // Aqui estamos chamando o método que irá adicionar um novo usuário
  var usr = await user.post(p);

  //Logo após a incerção validamos se ocorreu tudo certo 
  if (!usr) {
    return {
      statusCode: 400,
      msg: 'Erro: ao inserir a user ' + p.nome
    };
  }

  return usr;
}

async function put (p) {
  // Aqui estamos chamando o metodo que irá editar um usuário informado 
  var usr = await user.put(p);

  //Logo após a incerção validamos se ocorreu tudo certo 
  if (!usr) {
    return {
      statusCode: 400,
      msg: 'Erro: user não encontrada'
    };
  }

  return usr;
}

async function del (id) {
  // Aqui estamos chamando o método que irá deletar o usuário através do Id informado
  var usr = await user.del(id);

  //Aqui estamos validando se o  usuário realmente foi deletado
  if (!usr) {
    return {
      statusCode: 400,
      msg: 'Erro: user não encontrada'
    };
  }

  return usr;
}
//Aqui estamos exportando todos os métodos que criamos para que consigamos acessar eles de outros arquivos
module.exports = { getAll, get, post, put, del };
