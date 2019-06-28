'use strict'

const api = require('./api.js')
const surveyEvent = require('../survey/events.js')

const onCreateResponse = function (event) {
  event.preventDefault()

  const surveyId = $(event.target.parentElement).data('id')
  const optionId = $(`form[data-id='${surveyId}'] input:checked`).data('id')

  const responseData = { response: { answer: optionId } }

  api.createResponse(responseData)
    .then((res) => {
      surveyEvent.onIndexSurveys(event)
    })

    .catch($(`.messaging-${surveyId}`).html('pick something!'))
    .catch(console.error)
}

module.exports = {
  onCreateResponse
}
