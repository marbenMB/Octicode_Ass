const axios = require('axios')

const API_URL = 'https://dummyjson.com/users'

const fetchUsersFromDummy = async () =>  {
	const response = await axios.get(API_URL)
	
	return (response.data)
}

module.exports = {fetchUsersFromDummy}