'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateSurvey = async function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let newSurvey
  const newOptions = []
  try {
    newSurvey = await api.createSurvey({ survey: data.survey })
    console.log(newSurvey.survey._id)
    for (let i = 0; i < data.options.length; i++) {
      newOptions[i] = await api.createOption({option: {name: data.options[i], survey: newSurvey.survey._id}})
    }
  } catch (err) {
    console.log(newOptions)
    if (newSurvey) {
      api.deleteSurvey(newSurvey.survey.id)
      newOptions.forEach(option => api.deleteOption(option.option._id))
    }
    // ui.createSurveyFailure
    throw err
  }
}

const onIndexSurveys = (event) => {
  event.preventDefault()

  api.indexSurveys()
    .then(ui.onIndexSurveysSuccess)
    .catch(ui.onIndexSurveysFailure)
}

const onIndexYourSurveys = (event) => {
  event.preventDefault()

  api.indexYourSurveys()
    .then(ui.onIndexMySurveysSuccess)
}

const onDeleteSurvey = (event) => {
  console.log('clicked!')
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(id)

  api.deleteSurvey(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onCreateSurvey,
  onIndexSurveys,
  onIndexYourSurveys,
  onDeleteSurvey
}
