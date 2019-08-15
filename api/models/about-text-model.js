const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.once('open', function() {
	console.log('Connection has been made!');	
}).on('error', function(error){
	console.log('Error is: ', error);
});

const Schema = mongoose.Schema;

const AboutTextSchema = new Schema({
	text: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('AboutText', AboutTextSchema);