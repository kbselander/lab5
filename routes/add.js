var data = require("../data.json");

exports.addFriend = function(req, res) { 
	

	var name = req.query.name;
	var description = req.query.description; 
	var image = 'http://lorempixel.com/400/400/people'
	
	data['friends'].append({
		'name': name;
		'imageURL': imageURL;
		'description': description;
	});

	res.render('add', data);
 }