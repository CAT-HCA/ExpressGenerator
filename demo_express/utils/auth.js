const fs = require("fs");
// Note: email and password values hard-coded for demo only!

var auth = {
	users: [getUsers],
	authorize: function(email, password) {
		var validUser = this.users.filter(user => {
			return user.email === email && user.password === password;
		});

		if (validUser.length === 1) {
			return true;
		}
		return false;
	},
};

var getUsers = () => {
	try {
    var usersString = fs.readFileSync("/data/users.json");
    var users = JSON.parse(usersString);
		var filteredUsers = users.filter(user => user.email === email);
		return filteredUsers[0];
	} catch (err) {
		return [];
	}
};

module.exports = {
	auth,
};
