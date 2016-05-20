'use strict';

const 	mongoose = require('mongoose'),
		//Estrutura do Schema
		_structSchema = {
			name: require('./filds/fild-name'),
			password: require('./filds/fild-password'),
			email: require('./filds/fild-email'),	
			created_at: require('./filds/fild-create_at')
		},
		//Criação do Shema
		SchemaUser = new mongoose.Schema(_structSchema);

//Criando criptografia para senha
SchemaUser.plugin(require('mongoose-bcrypt'), { rounds: 6 });

module.exports = SchemaUser;