'use strict'

const indexDisplay = require('../templates/index-surveys.handlebars')

const onCreateSurveySuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  // console.log(responseData)
  $('.content').text(responseData.survey.title)
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

const onIndexSurveysSuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  console.log(responseData)
  $('.content').html(indexDisplay({ surveys: responseData.survey }))
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

module.exports = {
  onCreateSurveySuccess,
  onIndexSurveysSuccess
}
