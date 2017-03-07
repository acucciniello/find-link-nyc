 // enables strict mode which helps catch common JS programming blunders
'use strict'
var APP_ID = 'amzn1.ask.skill.098a6f70-b1bc-43f8-ae7e-7ffd8582ab6e'
var AlexaSkill = require('./alexa-skill')
var LaunchIntentFunction = require('./launch-intent-function.js')
var FindNearestFunction = require('./find-nearest-intent-function.js')
var HelpIntentFunction = require('./help-intent-function.js')
var StopIntentFunction = require('./stop-intent-function.js')
var CancelIntentFunction = require('./cancel-intent-function.js')

// Define a FindLinkService function which inherits from AlexaSkill.js class
var FindLinkService = function () {
  AlexaSkill.call(this, APP_ID)
}

FindLinkService.prototype = Object.create(AlexaSkill.prototype)

// this will be invoked when the user first launches or opens the skill with its invocation name
// this is triggered when said "Alexa, ask Google Drive"
FindLinkService.prototype.eventHandlers.onLaunch = LaunchIntentFunction

// How Alexa knows to handle all the different functions
// Each intent corresponds to a function
// That function is called when that intent is invoked
FindLinkService.prototype.intentHandlers = {
  'FindNearestIntent': FindNearestFunction,
  'AMAZON.HelpIntent': HelpIntentFunction,
  'AMAZON.StopIntent': StopIntentFunction,
  'AMAZON.CancelIntent': CancelIntentFunction
}

exports.handler = function (event, context) {
  var findLinkService = new FindLinkService()
  findLinkService.execute(event, context)
}
