
const	{fetchUsersFromDummy} = require('../services/users.service');
const	{chunkList} = require('../utils/utils')
const	listLimit = 6

const	chunkUsersController = (res, pageQueryStr) => {
	const	page = parseInt(pageQueryStr) ? parseInt(pageQueryStr) - 1 : parseInt(pageQueryStr)
	let		pagesLimit

	fetchUsersFromDummy().then(response => {
		pagesLimit = response.limit % 6 === 0 ? response.limit / listLimit : (response.limit / listLimit) + 1
		if (page > pagesLimit) {
			res.writeHead(404, {'Content-Type' : 'text/plain'})
			res.end(`Oops Page Not Found`)
		}
		else {
			const chunked = chunkList(response.users, (page * listLimit), listLimit)
			res.writeHead(200, {'Content-Type' : 'application/json'})
			res.end(JSON.stringify(chunked))
		}

	})
}

module.exports = {chunkUsersController}