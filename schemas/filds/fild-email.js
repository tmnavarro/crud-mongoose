'use strict';

module.exports = {
	type: String,
	validate: [require('./fild-validate-email'), 'Email informado não é válido']
};