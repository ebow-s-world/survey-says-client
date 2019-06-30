const store = require('../store.js')

const onSubmitFailure = (response) => {
  const responseObj = JSON.parse(response.responseText)
  $(`.messaging-${store.responses.survey}`).show()
  $(`.messaging-${store.responses.survey}`).html(responseObj.errors)
  $(`.messaging-${store.responses.survey}`).delay(3000).fadeOut('slow')
}

module.exports = {
  onSubmitFailure
}
