'use strict'

const store = require('../store')
const indexDisplay = require('../templates/index-surveys.handlebars')
const indexDisplayMy = require('../templates/display-my-index.handlebars')
const updateSurveyForm = require('../templates/update-survey-field.handlebars')
const createSurvey = require('../templates/create-survey-field.handlebars')
const createOption = require('../templates/create-option-field.handlebars')

// const onCreateSurveySuccess = responseData => {
//   // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
//   // console.log(responseData)
//   $('.content').text(responseData.survey.title)
//   $('form').trigger('reset')
//   $('.content').text('new survey success!')
//   // $('#message').text('created successfully!')
//   // setTimeout(() => $('#message').text(''), 4000)
// }

const onIndexSurveysSuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  // console.log(responseData)
  if (responseData.survey.length === 0) {
    $('.content').html('no surveys to display')
  } else {
    $('.content').html(indexDisplay({ surveys: responseData.survey }))
  }
  $('form').trigger('reset')
  $('#create-form').empty()
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

const onIndexMySurveysSuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  // console.log(responseData)
  store.mySurveys = responseData.survey
  if (store.mySurveys.length === 0) {
    $('.content').html('no surveys to display')
  } else {
    $('.content').html(indexDisplayMy({ surveys: responseData.survey }))
  }
  $('form').trigger('reset')
  $('#create-form').empty()
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

const onDeleteSuccess = () => {
  $('.content').text('deleted!')
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
