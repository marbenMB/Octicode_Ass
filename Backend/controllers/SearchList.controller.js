const	{fetchUsersFromDummy} = require('../services/users.service');

const	searchedList = async (req, res, parsedQuery) => {
	const	searchedUser = parsedQuery.search || ''
	const	response = await fetchUsersFromDummy()
	const	matched = response.users.filter((user) => {
		return user.username.substring(0, searchedUser.length) === searchedUser
	})
	res.writeHead(200, {'Content-Type' : 'application/json'})
	res.end(JSON.stringify(matched))
}

module.exports = {searchedList}