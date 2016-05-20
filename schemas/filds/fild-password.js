'use strict';

module.exports = {
	type: String,
	required: true, 
	validate: [require('./fild-validate-quant')(6), 'A senha deve possuir mais que 6 caracteres'],
	bcrypt: true,
}