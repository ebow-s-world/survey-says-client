'use strict'

const events = require('./events.js')
const surveyEvents = require('./survey/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.addHandlers()
  $('#create-survey').on('submit', surveyEvents.onCreateSurvey)
  // index doesn't work yet
  $('#index-survey').on('click', surveyEvents.onIndexSurvey)
})
