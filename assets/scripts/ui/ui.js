'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#message').fadeIn();
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  
  showMessage ();

}
const showMessage = () => {
  setTimeout(() => {
    $('#message').fadeOut()
  }, 3000);
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}
const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  showMessage ();
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}
const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')

  showMessage ();
}
const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}
// const changeEmailSuccess = () => {
//   console.log('Email Successfully Changed.')
// }
//
// const failure = (error) => {
//   console.error(error)
// }
//
// module.exports = {
//   changeEmailSuccess
// }
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
