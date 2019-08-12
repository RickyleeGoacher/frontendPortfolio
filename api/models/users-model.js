const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.once('open', function(){
	console.log('Connection to users has been made!');
}).on('error', function(error){
	console.log('Error is: ', error);
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Users', UserSchema);