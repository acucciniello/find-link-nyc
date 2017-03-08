require('dotenv').config()
var NodeGeocoder = require('node-geocoder')

module.exports = getCurrentLocation

function getCurrentLocation (address, result, callback) {
  var options = {
    provider: 'google',
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: process.env.APIKEY, // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  }

  var geocoder = NodeGeocoder(options)

  // Using callback
  geocoder.geocode(address, function (err, res) {
    if (err) {
      result = err
      return callback(result)
    } else if (res === undefined || res.length === 0) {
      result = res
      return callback(result)
    }
    result = res
    return callback(null, result)
  })
}
