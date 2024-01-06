require('dotenv').config()
const	http = require('http')
const	url = require('url')
const	querystring = require('querystring')

const	{usersController} = require('./controllers/Users.controller')
const	{chunkUsersController} = require('./controllers/ChunkUsers.controller')
const	{searchedList} = require('./controllers/SearchList.controller')

const PORT = parseInt(process.env.PORT) || 3500

console.debug(`------------- Server Is Listening In PORT : ${PORT} -------------`)

const server = http.createServer((req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Define allowed methods
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Define allowed headers

	let parsedUrl = url.parse(req.url)
	let parsedQuery = querystring.parse(parsedUrl.query)


	if (req.method === 'GET')
	{
		if (parsedUrl.pathname === '/users' && parsedUrl.query === null)
			usersController(res)
		else if (parsedUrl.pathname === '/users' && parsedQuery.page !== undefined && parsedQuery.page !== '')
			chunkUsersController(res, parsedQuery.page)
		else if (parsedUrl.pathname === '/search')
			searchedList(req, res, parsedQuery)
		else
			res.end("Home Page")
	}
	else
	{
		res.writeHead(403, { 'Content-Type': 'text/plain' });
  		res.end('403 - Forbidden');
	}

})

server.listen(PORT);