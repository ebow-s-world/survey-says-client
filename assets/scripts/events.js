const api = require('./api')
const getFormFields = require(`../../lib/get-form-fields`)
const store = require('./store')
const ui = require('./ui')
const surveyEvents = require('./survey/events')
const responseEvents = require('./response/events')

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
    .then(() => console.log(store.user))
    .catch(ui.changePasswordFailure)
}

// const onCreateSurvey = async function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   let newSurvey
//   const newOptions = []
//   try {
//     newSurvey = await api.createSurvey({ survey: data.survey })
//     console.log(newSurvey.survey._id)
//     for (let i = 0; i < data.options.length; i++) {
//       newOptions[i] = await api.createOption({option: {name: data.options[i], survey: newSurvey.survey._id}})
//     }
//   } catch (err) {
//     console.log(newOptions)
//     if (newSurvey) {
//       api.deleteSurvey(newSurvey.survey.id)
//       newOptions.forEach(option => api.deleteOption(option.option._id))
//     }
//     // ui.createSurveyFailure
//     throw err
//   }
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)

  $('#create-form').on('submit', '#create-survey', surveyEvents.onCreateSurvey)
  $('#index-survey').on('click', surveyEvents.onIndexSurveys)
  $('#index-yours').on('click', surveyEvents.onIndexYourSurveys)
  $('.content').on('click', '.delete-survey', surveyEvents.onDeleteSurvey)

  ui.showCreateSurvey()
  $('#create-form').on('click', '#add-option', ui.onAddOption)
  $('#create-form').on('click', '.remove-option', ui.onRemoveOption)

  $('.content').on('click', '.survey-submit', responseEvents.onCreateResponse)
  $('.content').on('click', '.results-button', surveyEvents.onGetResults)
}

module.exports = {
  addHandlers
}
