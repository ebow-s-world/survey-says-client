'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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
    .catch(ui.onIndexSurveyFailure)
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

const onUpdateSurvey = async function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const surveyId = $(event.target).data('id')
  const optionIds = []
  console.log(event.target.elements)
  const elements = event.target.elements
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute('data-optionid')) optionIds.push(elements[i].getAttribute('data-optionid'))
  }
  console.log(optionIds)
  const optionsToDelete = store.mySurveys.find(surv => surv._id === $(event.target).data('id')).options.filter(option => {
    return !optionIds.includes(option._id)
  })
  console.log(optionsToDelete)
  try {
    await api.updateSurvey(surveyId, { survey: data.survey })
    for (let i = 0; i < optionIds.length; i++) {
      if (optionIds[i].length > 10) await api.updateOption(optionIds[i], {option: {name: data.options[i]}})
      else await api.createOption({option: {name: data.options[i], survey: surveyId}})
    }
    for (let i = 0; i < optionsToDelete.length; i++) {
      await api.deleteOption(optionsToDelete[i]._id)
    }
  } catch (err) {
    // ui.updateSurveyFailure
    throw err
  }
}

module.exports = {
  onCreateSurvey,
  onIndexSurveys,
  onIndexYourSurveys,
  onDeleteSurvey,
  onUpdateSurvey
}
