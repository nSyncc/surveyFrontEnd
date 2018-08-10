// 'use strict'

// const api = require('./api')
// const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')

// const onSignUp = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signUp(data)
//   .done(ui.success)
//   .fail(ui.fail)
// }

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.signIn(data)
//   .done(ui.signInSuccess)
//   .fail(ui.fail)
// }

// const onChangeEmail = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changeEmail(data)
//   .done(ui.changeEmailSuccess)
//   .fail(ui.fail)
// }

// const addHandlers = () => {
//   $('#change-email').on('submit', onChangeEmail)
//   $('#signUp').on('submit', onSignUp)   
//   $('#signIn').on('submit', onSignIn)
//   $('#createBoard').on('click', renderBoard)
// }
// module.exports = {
//   addHandlers
// }
