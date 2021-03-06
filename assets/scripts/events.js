const api = require('./api')
const getFormFields = require(`../../lib/get-form-fields`)
const ui = require('./ui')
const surveyEvents = require('./survey/events')
const responseEvents = require('./response/events')
const surveyUi = require('./survey/ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)

  $('#create-form').on('submit', '#create-survey', surveyEvents.onCreateSurvey)
  $('#index-survey').on('click', surveyEvents.onIndexSurveys)
  $('#index-yours').on('click', surveyEvents.onIndexYourSurveys)
  $('.content').on('click', '.delete-survey', surveyEvents.onDeleteSurvey)
  $('.content').on('click', '.show-update-survey', surveyUi.onShowSurveyUpdate)
  $('#create-form').on('submit', '#update-survey', surveyEvents.onUpdateSurvey)

  $('#show-create-survey').on('click', surveyUi.showCreateSurvey)
  $('#create-form').on('click', '#add-option', surveyUi.onAddOption)
  $('#create-form').on('click', '.remove-option', surveyUi.onRemoveOption)

  $('.content').on('click', '.survey-submit', responseEvents.onCreateResponse)
  $('.content').on('click', '.results-button', surveyEvents.onGetResults)
  $('.kill-dropdown').click(() => $('#dropdownMenu2').dropdown('toggle'))
}

module.exports = {
  addHandlers
}
