'use strict'

const api = require('./api.js')
const surveyEvent = require('../survey/events.js')

const onCreateResponse = function (event) {
  event.preventDefault()

  const surveyId = $(event.target.parentElement).data('id')
  const optionId = $(`form[data-id='${surveyId}'] input:checked`).data('id')

  const responseData = { response: { answer: optionId } }
  if (responseData.response.answer) {
    api.createResponse(responseData)
      .then((res) => {
        surveyEvent.onIndexAfterSubmit(event)
      })
      // .then(() => $(`.messaging-${surveyId}`).html('thanks for submitting!'))
      .catch(console.error)
  } else {
    $(`.messaging-${surveyId}`).html('pick something!')
  }
}

module.exports = {
  onCreateResponse
}
