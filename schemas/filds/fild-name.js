'use strict';

module.exports = {
	type: String,
	required: 'Nome é obrigatório!',
	validate: [require('./fild-validate-quant')(4), 'O nome deve possuir mais que 3 caracteres'],
	set: require('./fild-set-capitalize')
};