
const chunkList = (list, startIndex, offset) => {

	if (startIndex >= list.length)
		return []
	
	return list.slice(startIndex, startIndex + offset)

}

module.exports = {chunkList}