'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = formData => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexSurvey = () => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSurvey,
  indexSurvey
}
