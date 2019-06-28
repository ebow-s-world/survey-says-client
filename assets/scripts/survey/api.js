'use strict'

const config = require('../config')
const store = require('../store')

const indexSurveys = () => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexYourSurveys = () => {
  return $.ajax({
    url: config.apiUrl + '/my-surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSurvey = function (id) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createOption = function (data) {
  return $.ajax({
    url: config.apiUrl + '/options',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteOption = function (id) {
  return $.ajax({
    url: config.apiUrl + '/options/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateOption = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/options/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createSurvey,
  indexSurveys,
  indexYourSurveys,
  deleteSurvey,
  createOption,
  deleteOption,
  updateSurvey,
  updateOption
}
