const axios = require('axios')
require('dotenv').config()

const API_URL = process.env.DATABASE_URL

const fetchUsersFromDummy = async () =>  {
	try {
		const response = await axios.get(API_URL)
		return (response.data)
	} catch (error) {
		return (error)
	}
}

module.exports = {fetchUsersFromDummy}