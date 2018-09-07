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
    .then(() => {
      ui.showModalMessage('success'); clearFields();
    })
    .catch(ui.showModalMessage('error'))

}
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then((result) => {
      ui.showModalMessage('success');
      $('#user').text('Welcome ' + result.user.name)
      store.user = result.user
      survey.showUserSurveys();

      $('#div-account').hide(); $('#dashboard').fadeIn();
      clearFields();
    })
    .catch((error) => {
      ui.showModalMessage('error', error);
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
/* clear fields */
const clearFields = () => {
  $('.form-control').val('');
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
