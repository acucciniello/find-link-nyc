module.exports = getLinkData

function getLinkData (linkData, callback) {
  const got = require('got')
  got('https://data.cityofnewyork.us/resource/3ktt-gd74.json', function (err, data, res) {
    if (err) {
      callback(err)
      return
    }
    // receive a string, need to convert to object
    linkData = JSON.parse(data)
    callback(null, linkData)
    return
  })
}
