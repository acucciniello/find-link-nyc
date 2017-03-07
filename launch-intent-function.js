module.exports = LaunchIntentFunction

// Purpose: To Launch the skill and Let the user know what the options are.
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function LaunchIntentFunction (intent, session, response) {
  var output = 'Welcome to Find LinkNYC.  You can find out where the nearest LinkNYC kiosk is based off your current location.  To start using the skill, say Alexa, ask LinkNYC to give me the nearest link kiosk to your address. '
  response.ask(output)
  return
}
