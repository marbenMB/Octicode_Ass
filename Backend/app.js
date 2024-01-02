require('dotenv').config()
const	http = require('http')
const	url = require('url')
const	querystring = require('querystring')

const	{usersController} = require('./controllers/Users.controller')
const	{chunkUsersController} = require('./controllers/ChunkUsers.controller')

const PORT = parseInt(process.env.PORT)

console.debug(`------------- Server Is Listening In PORT : ${PORT} -------------`)

const server = http.createServer((req, res) => {

	let parsedUrl = url.parse(req.url)
	let parsedQuery = querystring.parse(parsedUrl.query)

	if (parsedUrl.pathname === '/users' && parsedUrl.query === null)
		usersController(res)
	else if (parsedUrl.pathname === '/users' && parsedQuery.page !== undefined && parsedQuery.page !== '')
		chunkUsersController(res, parsedQuery.page)
	else
		res.end("Home Page")

})

server.listen(PORT);