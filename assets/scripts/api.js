'use strict'

const config = require('./config')
const store = require('./store')

const createSurvey = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
    })
  }

  const surveysIndex = function(){
  console.log(store)
  // make GET request to /surveys
  return $.ajax({
    url: config.apiUrl + '/surveys/',
    method: 'GET'
  })
}

const updateSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + data.survey.survey_id,
    method: 'PATCH',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
    })
  }

  const destroySurvey = function (data) {
  console.log(data.survey.id)
  return $.ajax({
    url: config.apiUrl + '/surveys/' + data.survey.id,

    method: 'DELETE',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const submitResponse = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/response/' + data.response.response_id,
    method: 'PATCH',
      },
      data
    })


  module.exports = {
  createSurvey,
  surveysIndex,
  updateSurvey,
  destroySurvey,
  submitResponse
}
