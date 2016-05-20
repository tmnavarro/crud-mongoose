'use strict';

const mongoose = require('mongoose');

//Criando conexão com banco de dados na collection Crudpeoples
mongoose.connect('mongodb://localhost/crudpeoples');

//Evento de verificação de conexão 'ativa'
mongoose.connection.on('connected', () => {
	console.log('Conexão estabelecida com sucesso!');
});