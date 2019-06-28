'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const surveyEvent = require('../survey/events.js')

const onCreateResponse = function (event) {
  event.preventDefault()

  const surveyId = $(event.target.parentElement).data('id')
  const optionId = $(`form[data-id='${surveyId}'] input:checked`).data('id')

  const responseData = { response: { answer: optionId } }

  api.createResponse(responseData)
    .then(console.log)
    .then((res) => {
      surveyEvent.onIndexSurveys(event)
    })
    .catch(console.error)
}

module.exports = {
  onCreateResponse
}
