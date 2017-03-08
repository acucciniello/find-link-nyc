var getCurrentLocation = require('./get-current-location.js')
var getLinkData = require('./get-link-data.js')
//  var calcDistance = require('./calc-distance.js')

module.exports = FindNearestFunction

// Purpose: To find the nearest link NYC kiosk given your location
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function FindNearestFunction (intent, session, response) {
  var address = intent.slots.address.value
  var resultCoordinates
  getCurrentLocation(address, resultCoordinates, function (err, res) {
    if (err) {
      var errorWrongLocation = 'Please try again I could not understand the address'
      response.tell(errorWrongLocation)
      return
    }
    var linkData
    var coordinates = {
      'latitude': 0,
      'longitude': 0
    }
    /* var nearestKiosk = {
      'prevDistance': null,
      'streetAddress': ''
    } */
    coordinates.latitude = res[0].latitude
    coordinates.longitude = res[0].longitude
    getLinkData(linkData, function (err, res) {
      if (err) {
        var failedDataGet = 'We failed to pull the data from the LinkNYC Dataset'
        response.tell(failedDataGet)
        return
      }
      response.tell('we have the result')
      return
      /*
      var point = {
        'latitude': 0,
        'longitude': 0
      }
      res.forEach(function (currentValue, index, array) {
        var streetAddress = array[index].street_address
        point.latitude = array[index].latitude
        point.longitude = array[index].longitude
        calcDistance(coordinates, point, streetAddress, nearestKiosk)
      })
      response.tell('The nearest link NYC kiosk is at: ' + nearestKiosk.streetAddress)
      return
      */
    })
  })
}
