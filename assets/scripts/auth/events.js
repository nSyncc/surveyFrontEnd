'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const survey = require('../survey/events')

const api = require('./api')
const ui = require('../ui/ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then((result) => {
      ui.signInSuccess()

      store.user = result.user
      survey.showUserSurveys();

      $('#div-account').hide(); $('#dashboard').fadeIn();

    })
    .catch((error) => {
      ui.signInFailure(error)
    })
}
const onSignOut = function () {

  api.signOut()
    .then(() => {
      ui.signOutSuccess
      $('#div-account').fadeIn(); $('#dashboard').hide();
      store.user = null
    })
    .catch(ui.signOutFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#changeEmail').on('submit')
}
module.exports = {
  addHandlers
}
