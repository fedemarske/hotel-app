var reader = require('fs'),
	HotelController = {};


HotelController.getHotels = function(cb){
	var urlFile = './data.json',
		encoding = 'utf8';

	reader.readFile(urlFile, encoding, function(err, data){
		if(err){
			console.log("Something went wrong")
		}else{
			console.log("All good")
			cb.json(JSON.parse(data))
		}
	})
}

module.exports = HotelController