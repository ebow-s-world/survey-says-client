'use strict'

const config = require('../config')
const store = require('../store')

const createResponse = function (data) {
  return $.ajax({
    url: config.apiUrl + '/responses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createResponse
}
