const store = require('../store.js')

const onSubmitFailure = (response) => {
  const responseObj = JSON.parse(response.responseText)
  $(`.messaging-${store.responses.survey}`).html(responseObj.errors)
}

module.exports = {
  onSubmitFailure
}
