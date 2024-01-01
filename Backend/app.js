const	http = require('http')
const	urlApi = 'https://dummyjson.com/users'
const	fetch = require('node-fetch')

const server = http.createServer((req, res) => {

	if (req.url === '/getData')
	{
		try {
	
			fetch(urlApi)
				.then((response) => {
					if (!response.ok)
						throw Error(`Http Error : ${response.status}`)
					return response.json()
				}).then(response => {
						// console.log(response)
						res.writeHead(200, {'Content-Type' : 'application/json'})
						res.end(JSON.stringify(response));
				}).catch(err => {
					res.writeHead(404, { 'Content-Type': 'text/plain' });
					res.end('Endpoint not found');
				})
		}catch (err) {
			console.error(err);
		}
	}
	else
		res.end("Hello World!!")

		

	console.debug(req.url)
})

server.listen(3500);