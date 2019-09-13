const fs = require("fs");
// Note: email and password values hard-coded for demo only!

var auth = {
	authorize: function(email, password) {
		console.log(email, password);
		var users = getUsers();
		console.log(users);
		var validUser = users.filter(user => {
			return user.email === email && user.password === password;
		});

		if (validUser.length === 1) {
			return true;
		}
		return false;
	}
};

var getUsers = () => {
	try {
		console.log("before");
		var usersString = fs.readFileSync("./data/users.json");
		console.log("after");
		var users = JSON.parse(usersString);
		return users;
	} catch (err) {
		return [];
	}
};

module.exports = {
	auth,
};
