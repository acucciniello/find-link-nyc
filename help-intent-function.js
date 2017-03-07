module.exports = HelpIntentFunction

// Purpose: To provide the user with more information on how to use the skill
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function HelpIntentFunction (intent, session, response) {
  var begin = 'This is a skill that allows you to find a link NYC kiosk. '
  var useFindNearest = 'In order to find your nearest link NYC, please say Alexa, ask linkNYC to give me the nearest link kiosk. '
  var question = 'What would you like to do ?'
  var output = begin + useFindNearest + question
  response.ask(output)
  return
}

