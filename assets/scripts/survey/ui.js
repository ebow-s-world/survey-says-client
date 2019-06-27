'use strict'

const store = require('../store')
const indexDisplay = require('../templates/index-surveys.handlebars')
const indexDisplayMy = require('../templates/display-my-index.handlebars')
const updateSurveyForm = require('../templates/update-survey-field.handlebars')
const createSurvey = require('../templates/create-survey-field.handlebars')
const createOption = require('../templates/create-option-field.handlebars')

const onCreateSurveySuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  // console.log(responseData)
  $('.content').text(responseData.survey.title)
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

const onIndexSurveysSuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  console.log(responseData)
  $('.content').html(indexDisplay({ surveys: responseData.survey }))
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

const onIndexMySurveysSuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  console.log(responseData)
  store.mySurveys = responseData.survey
  $('.content').html(indexDisplayMy({ surveys: responseData.survey }))
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

const onDeleteSuccess = () => {
  $('.content').text('deleted!')
}

const showCreateSurvey = function (event) {
  store.optionId = 0
  store.optionCount = 2
  $('#create-form').append(createSurvey())
  $('#options').append(createOption({ id: store.optionId++ }))
  $('#options').append(createOption({ id: store.optionId++ }))
  updateAddRemove()
}

const onAddOption = function (event) {
  event.stopPropagation()
  $('#options').append(createOption({ id: store.optionId++ }))
  store.optionCount++
  updateAddRemove()
}

const onRemoveOption = function (event) {
  event.stopPropagation()
  const id = $(event.target).data('optionId')
  $(`#option-${id}`).remove()
  store.optionCount--
  updateAddRemove()
}

const updateAddRemove = function () {
  if (store.optionCount < 3) $('.remove-option').addClass('disable')
  else if (store.optionCount > 9) $('#add-option').addClass('disable')
  else {
    $('.remove-option').removeClass('disable')
    $('#add-option').removeClass('disable')
  }
}

const onShowSurveyUpdate = event => {
  const survey = store.mySurveys.find(surv => surv._id === $(event.target).data('id'))
  console.log(survey)
  store.optionId = 0
  store.optionCount = survey.options.length
  $('#create-form').html(updateSurveyForm({ survey: survey }))
  updateAddRemove()
}

module.exports = {
  onCreateSurveySuccess,
  onIndexSurveysSuccess,
  onIndexMySurveysSuccess,
  onShowSurveyUpdate,
  onDeleteSuccess,
  onAddOption,
  onRemoveOption,
  showCreateSurvey
}
