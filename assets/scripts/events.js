const api = require('./api')
const getFormFields = require(`../../lib/get-form-fields`)
const store = require('./store')
const ui = require('./ui')
const surveyEvents = require('./survey/events')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
  // .then(ui.signUpSuccess)
  // .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    // .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
  // .then(ui.signOutSuccess)
  // .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(() => console.log(store.user))
    // .catch(ui.changePasswordFailure)
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

  $('#create-survey').on('submit', surveyEvents.onCreateSurvey)
  $('#index-survey').on('click', surveyEvents.onIndexSurveys)
  $('#index-yours').on('click', surveyEvents.onIndexYourSurveys)

  store.optionCount = 0
  $('#add-option').on('click', ui.onAddOption)
  $('#extra-options').on('click', '#remove-option', ui.onRemoveOption)
}

module.exports = {
  addHandlers
}
