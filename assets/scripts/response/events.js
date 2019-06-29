'use strict'

const api = require('./api.js')
const surveyEvent = require('../survey/events.js')
const store = require('../store.js')
const responseUi = require('./ui.js')

const onCreateResponse = function (event) {
  event.preventDefault()

  const surveyId = $(event.target.parentElement).data('id')
  const optionId = $(`form[data-id='${surveyId}'] input:checked`).data('id')

<<<<<<< HEAD
  const responseData = { response: { answer: optionId } }
=======
  const responseData = { response: { answer: optionId, survey: surveyId } }
  store.responses = { survey: surveyId, response: responseData.response.answer }

>>>>>>> Add limit for submitting Responses
  if (responseData.response.answer) {
    api.createResponse(responseData)
      .then((res) => {
        surveyEvent.onIndexAfterSubmit(event)
      })
      // .then(() => $(`.messaging-${surveyId}`).html('thanks for submitting!'))
<<<<<<< HEAD
      .catch(console.error)
=======
      .catch(responseUi.onSubmitFailure)
      // .catch(console.error)
>>>>>>> Add limit for submitting Responses
  } else {
    $(`.messaging-${surveyId}`).html('pick something!')
  }
}

module.exports = {
  onCreateResponse
}
