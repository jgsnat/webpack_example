const logger = require('./logger');
import Pessoa from './models/pessoa';

console.log('Webpack');
logger.info('Usuando o padrão CommonJS!');

const pessoa = new Pessoa('Jefferson');
logger.info(pessoa.toString());
