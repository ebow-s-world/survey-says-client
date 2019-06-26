'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateSurvey = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createSurvey(formData)
    .then(ui.onCreateSurveySuccess)
    .catch(ui.onCreateSurveyFailure)
}

// doesn't work yet
const onIndexSurvey = (event) => {
  event.preventDefault()

  api.indexSurvey()
    .then(ui.indexSurveySuccess)
    .catch(ui.onIndexSurveyFailure)
}

module.exports = {
  onCreateSurvey,
  onIndexSurvey
}
