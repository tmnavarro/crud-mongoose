'use strict';

const 	mongoose = require('mongoose'),
		SchemaUser = require('../schemas/schema-user'),
		Users = mongoose.model('Users', SchemaUser);

//Usuario de teste
let userTest = {
	name: 'TÚlIo nAVarro',
	email: 'tnavarro@servidor.com.js',
	password: '123456'
};


/*Users.create(userTest, (err, data)=>{
	return err ? console.log(err) : console.log(data);
});
*/

Users.find({}, (err, data)=>{
	return err ? console.log(err) : console.log(data);
});

/*Users.remove({}, (err, data)=>{
	return console.log(err ? err : data);
})*/


