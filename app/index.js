const express = require('express')
const App = express()

var HotelController = require('../app/controllers/HotelController.js')

App.use(express.static(__dirname + '/../public'))

App.get('/hotels', function (req, res) {
	res.json(HotelController.getHotels())
})

App.get('*', function(req, res) {
    res.redirect('/');
});

App.listen(3000, function () {
	console.log('Hotels App listening on port 3000')
})