const store = require('./store')
// const api = require('./api')

const signInSuccess = function (data) {
  store.user = data.user
  store.user_id = data.user.id
}

module.exports = {
  signInSuccess
}
