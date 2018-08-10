'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = function (data) {

  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(data)
  })
}
const createQuestions = function (data) {

  return $.ajax({
    url: config.apiUrl + '/questions',
    method: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(data)
  });

}
const createResponses = function (data) {

  return $.ajax({
    url: config.apiUrl + '/responses',
    method: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify(data)
  });

}
const getSurveyResponses = function (id) {
  return $.ajax({
    url: config.apiUrl + '/responses/' + id,
    method: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
}


const getUserSurveys = function () {

  return $.ajax({
    url: config.apiUrl + '/surveys/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getSurveyQuestions = function (id) {
  return $.ajax({
    url: config.apiUrl + '/questions/' + id,
    method: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  });
}

module.exports = {
  createSurvey,
  getUserSurveys,
  createQuestions,
  getSurveyQuestions,
  createResponses,
  getSurveyResponses
}
