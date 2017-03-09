module.exports = getLinkData

function getLinkData (linkData, callback) {
  const got = require('got')
  got('https://data.cityofnewyork.us/resource/3ktt-gd74.json')
      .then((response) => {
        linkData = JSON.parse(response.body)
        callback(null, linkData)
        return
      })
      .catch((error) => {
        callback(error.response.body)
        return
      })
}

