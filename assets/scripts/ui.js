const store = require('./store')
// const api = require('./api')
const createOption = require('./templates/create-option-field.handlebars')

const signUpSuccess = function () {
  $('#log-message').show()
  $('#log-message').html('Sign up Success!')
  $('#log-message').delay(2000).fadeOut('slow')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#log-message').html('Sign up Failure!')
  $('#log-message').delay(2000).fadeOut('slow')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.user_id = data.user.id
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#surveys').show()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#log-message').html('Sign in Failed')
  $('#log-message').delay(2000).fadeOut('slow')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#sign-in').show()
  $('#sign-up').show()
  $('#log-message').show()
  $('#log-message').html('Signed Out!')
  $('#log-message').delay(2000).fadeOut('slow')
}

const signOutFailure = function () {
  $('#log-message').html('Sign out Failed!')
  $('#log-message').delay(2000).fadeOut('slow')
}

const onAddOption = function (event) {
  event.stopPropagation()
  $('#extra-options').append(createOption({ count: store.optionCount++ }))
}

const onRemoveOption = function (event) {
  event.stopPropagation()
  const id = $(event.target).data('id')
  $(`#option-${id}`).remove()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  onAddOption,
  onRemoveOption
}
