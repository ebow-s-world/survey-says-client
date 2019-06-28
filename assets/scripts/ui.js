const store = require('./store')
// const api = require('./api')

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
  $('.sign-in').removeClass('disable')
  $('.log').removeClass('log-before-nav2')
  $('#log-message').html('Signed In Successfully!')
  $('#log-message').delay(1000).fadeOut('slow')
}

const signInFailure = function () {
  $('#log-message').html('Sign in Failed')
  $('#log-message').delay(2000).fadeOut('slow')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#sign-in').show()
  $('.sign-in').addClass('disable')
  $('.log').addClass('log-before-nav2')
  $('#sign-up').show()
  $('#log-message').show()
  $('#log-message').html('Signed Out!')
  $('#log-message').delay(2000).fadeOut('slow')
  $('.content').html('')
}

const signOutFailure = function () {
  $('#log-message').html('Sign out Failed!')
  $('#log-message').delay(2000).fadeOut('slow')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
