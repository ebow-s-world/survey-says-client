'use strict'

// const store = require('../store')
const indexDisplay = require('../templates/index-surveys.handlebars')
const indexDisplayMy = require('../templates/display-my-index.handlebars')

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

const onIndexMySurveysSuccess = responseData => {
  // $('#content').html(showSurveyTemplate({survey: responseData.survey}))
  console.log(responseData)
  $('.content').html(indexDisplayMy({ surveys: responseData.survey }))
  $('form').trigger('reset')
  // $('#message').text('created successfully!')
  // setTimeout(() => $('#message').text(''), 4000)
}

// const onIndexYourSurveysSuccess = responseData => {
//   // console.log(responseData.survey)
//   // store.user = responseData.user.id
//   console.log(store.user._id)
//   for (let i = 0; i < responseData.survey.length; i++) {
//     // console.log(responseData.survey[i].owner)
//     if (responseData.survey[i].owner === store.user._id) {
//       console.log(responseData.survey[i])
//     }
//   }
// }

const onDeleteSuccess = () => {
  $('.content').text('deleted!')
}

module.exports = {
  onCreateSurveySuccess,
  onIndexSurveysSuccess,
  onIndexMySurveysSuccess,
  onDeleteSuccess
}