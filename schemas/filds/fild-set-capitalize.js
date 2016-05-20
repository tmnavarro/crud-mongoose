'use strict';

//Função para alterar primeira letra de cada palavra para maiúsca 
module.exports = (s) => {
	return s.replace(/\w\S*/g, 
		(txt) => {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	}); 
};