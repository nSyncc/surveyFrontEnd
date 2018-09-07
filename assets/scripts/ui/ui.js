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
const showModalMessage = (type, error) => {
 
  $('#myModal').modal({
    backdrop: 'static',
    keyboard: false
  });

  switch (type) {
    case 'UserRegistrated':
      $('#modal-message-one').text('Thank you for sign In. Survey Tracker :)');
      break;
      case 'UserHasNotProjects':
      $('#modal-message-one').text('You do not have projects created. Try to create a new project :)');
      break;
      case 'ProjectHasNotStories':
      $('#modal-message-one').text('This projects do not have stories. Try to create a new story :)');
      break;
      case 'StoryNotHasTasks':
      $('#modal-message-one').text('This story do not have tasks. Try to create a new task :)');
      break;
    case 'success':
      $('#modal-message-one').text('Your request was successful. Survey Tracker :)');
      break;
      case 'error':
      $('#modal-message-one').text(`Something went wrong :( error: ${JSON.stringify(error)}`);
      break;
    default:
      return;
  }
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
  signOutFailure,
  showModalMessage
}
