'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const indexDisplay = require('../templates/index-surveys.handlebars')

const onCreateSurvey = async function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let newSurvey
  const newOptions = []
  try {
    newSurvey = await api.createSurvey({ survey: data.survey })
    $('.content').text('created!')
    for (let i = 0; i < data.options.length; i++) {
      newOptions[i] = await api.createOption({option: {name: data.options[i], survey: newSurvey.survey._id}})
    }
  } catch (err) {
    if (newSurvey) {
      api.deleteSurvey(newSurvey.survey.id)
      newOptions.forEach(option => api.deleteOption(option.option._id))
    }
    throw err
  }
  $('#create-form').empty()
}

const onIndexSurveys = (event) => {
  event.preventDefault()

  api.indexSurveys()
    .then(ui.onIndexSurveysSuccess)
    .catch(ui.onIndexSurveysFailure)
}

const onIndexAfterSubmit = (event) => {
  event.preventDefault()
  const surveyId = $(event.target.parentElement).data('id')
  const resultsHidden = $(`#results-${surveyId}`).hasClass('disable')
  const doHide = () => {
    if (resultsHidden) {
    } else {
      $(`#results-${surveyId}`).toggle()
    }
  }

  api.indexSurveys()
    .then((responseData) => $('.content').html(indexDisplay({ surveys: responseData.survey })))
    .then(() => $(`.messaging-${surveyId}`).html('thanks for submitting!'))
    .then(doHide)
}

const onIndexYourSurveys = (event) => {
  event.preventDefault()

  api.indexYourSurveys()
    .then(ui.onIndexMySurveysSuccess)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')

  api.deleteSurvey(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const onUpdateSurvey = async function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const surveyId = $(event.target).data('id')
  const optionIds = []
  const elements = event.target.elements
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute('data-optionid')) optionIds.push(elements[i].getAttribute('data-optionid'))
  }
  const optionsToDelete = store.mySurveys.find(surv => surv._id === $(event.target).data('id')).options.filter(option => {
    return !optionIds.includes(option._id)
  })
  try {
    await api.updateSurvey(surveyId, { survey: data.survey })
    for (let i = 0; i < optionIds.length; i++) {
      if (optionIds[i].length > 10) await api.updateOption(optionIds[i], {option: {name: data.options[i]}})
      else await api.createOption({option: {name: data.options[i], survey: surveyId}})
    }
    for (let i = 0; i < optionsToDelete.length; i++) {
      await api.deleteOption(optionsToDelete[i]._id)
    }
    onIndexYourSurveys(event)
  } catch (err) {
    throw err
  }
  $('.content').text('updated!')
  $('#update-survey').addClass('disable')
}

const onGetResults = (event) => {
  event.preventDefault()
  const surveyId = $(event.target.parentElement.parentElement).data('id')
  $(`.results-${surveyId}`).toggleClass('disable')
}

module.exports = {
  onCreateSurvey,
  onIndexSurveys,
  onIndexYourSurveys,
  onDeleteSurvey,
  onGetResults,
  onUpdateSurvey,
  onIndexAfterSubmit
}
