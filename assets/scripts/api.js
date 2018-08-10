'use strict'
'use strict'

const config = require('./config.js')
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changeEmail = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-email/',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const showEmail = function(id) {
  return $.ajax({
    url: config.apiUrl + '/show-email',
    method: 'GET',
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });

}
const deleteEmail = function() {
  return $.ajax({
    url: config.apiUrl + `/delete-email`,
    method: 'DELETE',
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
}
const updateEmail = function() {
  return $.ajax({
    url: config.apiUrl + `/update-email`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

      }
    })
  }
const createEmail = function(data) {
  return $.ajax({
    url: config.apiUrl + `/create-email`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    :{
    
      }
  })
}

const getSurveyQuestions = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getItemsUsers(data)
  .done((data) => {
    $.each(data.surveyQuestions, (index, element) => {
console.log(data.items_users[index])
      $('#table-projects > tbody').append('<tr><td>' + element.id + '</td><td>' + element.item.name + '</td><td>' + element.item.part + '</td><td>' + element.item.price + '</td></tr>') ;
     });
  })
  .fail(ui.fail)
}

module.exports = {
  changeEmail
}