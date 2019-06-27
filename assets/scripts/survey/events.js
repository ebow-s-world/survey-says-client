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


const onIndexSurvey = (event) => {
  event.preventDefault()

  api.indexSurvey()
    .then(ui.onIndexSurveySuccess)
    .catch(ui.onIndexSurveyFailure)
}

const onIndexYourSurveys = (event) => {
  event.preventDefault()

  api.indexSurvey()
    .then(ui.onIndexYourSurveysSuccess)
}

module.exports = {
  onCreateSurvey,
  onIndexSurvey,
  onIndexYourSurveys
}
