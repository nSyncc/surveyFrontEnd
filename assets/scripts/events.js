<<<<<<< HEAD
'use strict'

// const api = require('./api.js')
// const ui = require('./ui.js')
// const getFormFields = require('../../lib/get-form-fields.js')

// const onCreateSurvey = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // input validation
//   if (data.question === '') {
//     $('.survey').html('<p>You must select a question to create a survey</p>')
//     api.createSurvey(data)
//       .then(ui.onCreateSuccess)
//       .catch(ui.onError)
//     }
// }

// const onSurveyIndex = function(event){
//   // prevent default submit action
//   event.preventDefault()
//   // make API call
//   api.surveysIndex()
//   // if API call is successful then
//   .then(ui.onIndexSuccess)
//   // if API call fails then
//   .catch(ui.onError)
// }

// const onUpdateSurvey = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // input validation
//   if (data.survey.id === '') {
//     $('.survey').html('<p>ID is required</p>')
//   } else if (data.survey.survey_name === '') {
//     $('.survey').html('<p>Survey name is required</p>')
//   } else if (data.survey.question1 === '') {
//     $('.survey').html('<p>Question 1 is required</p>')
//   } else if (data.survey.question2 === '') {
//     $('.survey').html('<p>Question 2 is required</p>')
//   } else if (data.survey.question3 === '') {
//     $('.survey').html('<p>Question 3 is required</p>')
//   } else if (data.survey.question4 === '') {
//     $('.survey').html('<p>Question 4 is required</p>')
//   } else if (data.survey.question5 === '') {
//     $('.survey').html('<p>Question 5 is required</p>')
//   } else {
//     api.updateSurvey(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onError)
//     }
// }

// const onDestroySurvey = function (event) {
//   event.preventDefault()

//   const data = getFormFields(event.target)

//   // input validation
//   if (data.survey.id === '') {
//     $('.survey').html('<p>ID is required</p>')

//   } else {
//     api.destroySurvey(data)
//       .then(ui.onDestroySuccess)
//       .catch(ui.onError)
//   }
// }
// const onSubmitResponse = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // input validation
//   if (data.response === '') {
//     $('#content').html('<p>A response is required</p>')
//     api.updateResponse(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onError)
//     }
// }

// const addHandlers = () => {
//   $('#create-survey').on('submit', events.onCreateSurvey)
//   $('#survey-response').on('submit', events.onSubmitResponse)
// }

// module.exports = {
//   onCreateSurvey,
//   onSurveyIndex,
//   onUpdateSurvey,
//   onDestroySurvey,
//   onSubmitResponse
=======
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
>>>>>>> Finished a default page for the survey page that will later be edited to fit each survey specifically
// }
