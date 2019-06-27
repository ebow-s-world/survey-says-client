const store = require('./store')
// const api = require('./api')
const createSurvey = require('./templates/create-survey-field.handlebars')
const createOption = require('./templates/create-option-field.handlebars')

const signInSuccess = function (data) {
  store.user = data.user
  store.user_id = data.user.id
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
  signInSuccess,
  showCreateSurvey,
  onAddOption,
  onRemoveOption
}
