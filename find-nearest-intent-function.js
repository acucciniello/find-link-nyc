var getCurrentLocation = require('./get-current-location.js')

module.exports = FindNearestFunction

// Purpose: To find the nearest link NYC kiosk given your location
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function FindNearestFunction (intent, session, response) {
  var address = intent.slots.address.value
  var resultCoordinates = []
  getCurrentLocation(address, resultCoordinates, function (err, res) {
    if (err) {
      response.tell(err)
      return
    }
    var latitude = res[0].latitude
    // var longitude = res[0].longitude

    response.tell('The latitude is: ' + latitude)
    return
  })
}
