const store = require('./store')
// const api = require('./api')
const createSurvey = require('./templates/create-survey-field.handlebars')
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

const showCreateSurvey = function (event) {
  store.optionId = 0
  store.optionCount = 2
  $('#create-form').append(createSurvey())
  $('#options').append(createOption({ count: store.optionId++ }))
  $('#options').append(createOption({ count: store.optionId++ }))
  updateAddRemove()
}

const onAddOption = function (event) {
  event.stopPropagation()
  $('#options').append(createOption({ count: store.optionId++ }))
  store.optionCount++
  updateAddRemove()
}

const onRemoveOption = function (event) {
  event.stopPropagation()
  const id = $(event.target).data('id')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  showCreateSurvey,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  onAddOption,
  onRemoveOption
}
