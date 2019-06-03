const logger = require('./logger');
import Pessoa from './models/pessoa';

console.log('Webpack');
logger.info('Usuando o padrão CommonJS!');

const pessoa = new Pessoa('Jefferson');
logger.info(pessoa.toString());

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.50
};

function clone(objeto) {
    return { ...objeto };
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto)