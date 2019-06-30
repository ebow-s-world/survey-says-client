const store = require('./store')
// const api = require('./api')

const signUpSuccess = function () {
  $('#log-message').show()
  $('#log-message').html('Sign up Success!')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#log-message').html('Sign up Failure!')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.user_id = data.user.id
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#surveys').show()
  $('form').trigger('reset')
  $('.sign-in').removeClass('disable')
  $('.log').removeClass('log-before-nav2')
  $('#log-message').html('Signed In Successfully!')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
  $('.steve-harvey').addClass('disable')
}

const signInFailure = function () {
  $('#log-message').html('Sign in Failed')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#sign-in').show()
  $('.sign-in').addClass('disable')
  $('.log').addClass('log-before-nav2')
  $('#sign-up').show()
  $('#log-message').show()
  $('#log-message').html('Signed Out!')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
  $('.content').empty()
  $('#create-form').empty()
  $('.steve-harvey').removeClass('disable')
}

const signOutFailure = function () {
  $('#log-message').html('Sign out Failed!')
  $('#log-message').show()
  $('#log-message').delay(1000).fadeOut('slow')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('.change-password-message').html('')
  $('.change-password-message').show()
  $('.change-password-message').html('Password Changed!')
  $('.change-password-message').delay(1000).fadeOut()
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('.change-password-message').html('')
  $('.change-password-message').show()
  $('.change-password-message').html('Failure!')
  $('.change-password-message').delay(1000).fadeOut()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
