'use strict'

const store = require('./store')

const onCreateSuccess = function (data) {
  $('#create-survey-message').text('Successfully Created New Survey')
  $('#create-survey-message').css('background-color', 'green')
  $('#create-survey-message').fadeOut(7500)
  // reset form
  $('#create-survey').trigger("reset")
}

const onCreateFailure = function(data){
  // display error to user
  $('#create-survey-message').text('Error on submit')
  $('#create-survey-message').css('background-color', 'red')
}

const onIndexSuccess = function(data){
  // empty content element
  $('#my-survey-content').html('')
  // loop through API response data
  data.surveys.forEach(survey => {
    // build HTML element with data
    const mySurveyContentHTML = (`
      <h4>Survey Name: ${survey.survey_name}</h4>
      <p>Survey ID: ${survey.id}</p>
      <p>Question 1: ${survey.question1}</p>
      <p>Question 2: ${survey.question2}</p>
      <p>Question 3: ${survey.question3}</p>
      <p>Question 4: ${survey.question4}</p>
      <p>Question 5: ${survey.question5}</p>
    `)
    // append mySurveyContentHTML to content
    $('.mySurveyContent').append(mySurveyContentHTML)
    $('#survey-submit-message').text('Survey List Ready')
    $('#survey-submit-message').css('background-color', 'green')
    $('#survey-submit-message').fadeOut(7500)
  })
}

const onIndexFailure = function(data){
  // display error to user
  $('#survey-submit-message').text('Error on submit')
  $('#survey-submit-message').css('background-color', 'red')
}

const onUpdateSuccess = function (data) {
  $('.survey').html('')
// loop through API response data
// build HTML element with data
const surveyHTML = (`
  <h4>Survey Name: ${survey.survey_name}</h4>
  <p>Survey ID: ${survey.id}</p>
  <p>Question 1: ${survey.question1}</p>
  <p>Question 2: ${survey.question2}</p>
  <p>Question 3: ${survey.question3}</p>
  <p>Question 4: ${survey.question4}</p>
  <p>Question 5: ${survey.question5}</p>
`)
// append surveyHTML to .survey
$('.survey').append(surveyHTML)
$('#survey-submit-message').text('Successfully Updated Survey')
$('#survey-submit-message').css('background-color', 'green')
$('#survey-submit-message').fadeOut(7500)
}

const onUpdateFailure = function(data){
  // display error to user
  $('#survey-submit-message').text('Error on submit')
  $('#survey-submit-message').css('background-color', 'red')
}

const onDestroySuccess = function (){
  $('.survey').html("Survey Successfully Deleted!")
  $('#survey-submit-message').text('Successfully Deleted Survey')
  $('#survey-submit-message').css('background-color', 'green')
  $('#survey-submit-message').fadeOut(7500)
  // reset form
  $('#trails-delete').trigger("reset")
}

const onDestroyFailure = function(data){
  // display error to user
  $('#survey-submit-message').text('Error on submit')
  $('#survey-submit-message').css('background-color', 'red')
}

const onSubmitSuccess = function (data) {
$('#survey-submit-message').text('Survey Submitted')
$('#survey-submit-message').css('background-color', 'green')
$('#survey-submit-message').fadeOut(7500)
}

const onSubmitFailure = function(data){
  // display error to user
  $('#survey-submit-message').text('Error on submit')
  $('#survey-submit-message').css('background-color', 'red')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onDestroySuccess,
  onDestroyFailure,
  onSubmitSuccess,
  onSubmitFailure
}
