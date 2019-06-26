'use strict'

// const store = require('../store')

const onCreateSurveySuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  console.log(responseData)
  $('.content').text(responseData.survey.title)
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}


const onIndexSurveySuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  console.log(responseData)
  $('.content').text(responseData.surveys)
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

module.exports = {
  onCreateSurveySuccess,
  onIndexSurveySuccess
}
