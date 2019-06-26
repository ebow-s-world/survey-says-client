const api = require('./api')
const getFormFields = require(`../../lib/get-form-fields`)
const store = require('./store')
const ui = require('./ui')

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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)

  store.optionCount = 0
  $('#add-option').on('click', ui.onAddOption)
  $('#extra-options').on('click', '#remove-option', ui.onRemoveOption)
}

module.exports = {
  addHandlers
}
