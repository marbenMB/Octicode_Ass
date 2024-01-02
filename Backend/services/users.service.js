const axios = require('axios')

const url = 'https://dummyjson.com/users'

const fetchUsersFromDummy = async () =>  {
	const response = await axios.get(url)
	
	return (response.data)
}

module.exports = {fetchUsersFromDummy}