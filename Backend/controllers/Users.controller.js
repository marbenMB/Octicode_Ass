
const	{fetchUsersFromDummy} = require('../services/users.service');

const usersController = (res) => {

	fetchUsersFromDummy().then((response) => {
		res.writeHead(200, {'Content-Type' : 'application/json'})
		res.end(JSON.stringify(response.users))
		// res.end(JSON.stringify(chunkList(response.users, 0)));
	})
}

module.exports = {usersController}