'use strict'

const store = require('../store')
const indexDisplay = require('../templates/index-surveys.handlebars')
const indexDisplayMy = require('../templates/display-my-index.handlebars')
const updateSurveyForm = require('../templates/update-survey-field.handlebars')
const createSurvey = require('../templates/create-survey-field.handlebars')
const createOption = require('../templates/create-option-field.handlebars')
const api = require('./api.js')

const onIndexSurveysSuccess = responseData => {
  if (responseData.survey.length === 0) {
    $('#log-message').html('No surveys to display')
    $('#log-message').show()
    $('#log-message').delay(2000).fadeOut()
    $('.content').empty()
  } else {
    $('.content').html(indexDisplay({ surveys: responseData.survey.reverse() }))
  }
  $('form').trigger('reset')
  $('#create-form').empty()
}

const onIndexMySurveysSuccess = responseData => {
  store.mySurveys = responseData.survey
  if (store.mySurveys.length === 0) {
    $('#log-message').html('No surveys to display')
    $('#log-message').show()
    $('#log-message').delay(1000).fadeOut()
    $('.content').empty()
  } else {
    $('.content').html(indexDisplayMy({ surveys: responseData.survey.reverse() }))
  }
  $('form').trigger('reset')
  $('#create-form').empty()
}

const onDeleteSuccess = () => {
  $('#log-message').html('Deleted!')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
  api.indexYourSurveys()
    .then(onIndexMySurveysSuccess)
    .then($('*').scrollTop(0))
}

const showCreateSurvey = function (event) {
  store.optionId = 2
  store.optionCount = 2
  $('#create-form').html(createSurvey())
  updateAddRemove()
  $('.content').empty()
}

const onAddOption = function (event) {
  event.stopPropagation()
  $('#options').append(createOption({ id: store.optionId++ }))
  store.optionCount++
  updateAddRemove()
}

const onRemoveOption = function (event) {
  event.stopPropagation()
  const id = $(event.target).data('optionid')
  $(`#option-${id}`).remove()
  store.optionCount--
  updateAddRemove()
}

const updateAddRemove = function () {
  if (store.optionCount < 3) $('.remove-option').hide()
  else if (store.optionCount > 9) $('#add-option').hide()
  else {
    $('.remove-option').show()
    $('#add-option').show()
  }
}

const onShowSurveyUpdate = event => {
  $('*').scrollTop(0)
  const survey = store.mySurveys.find(surv => surv._id === $(event.target).data('id'))
  store.optionId = 0
  store.optionCount = survey.options.length
  $('#create-form').html(updateSurveyForm({ survey: survey }))
  updateAddRemove()
}

module.exports = {
  // onCreateSurveySuccess,
  onIndexSurveysSuccess,
  onIndexMySurveysSuccess,
  onShowSurveyUpdate,
  onDeleteSuccess,
  onAddOption,
  onRemoveOption,
  showCreateSurvey
}
