const store = require('./store')
// const api = require('./api')
const createOption = require('./templates/create-option-field.handlebars')

const signInSuccess = function (data) {
  store.user = data.user
  store.user_id = data.user.id
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
  signInSuccess,
  onAddOption,
  onRemoveOption
}
