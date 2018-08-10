'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
//require('./toggle.js')
const handlers = require('./survey/events')
const authHandlers = require('./auth/events')
$(() => {
  // your JS code goes here
   handlers.addHandlers();
   authHandlers.addHandlers();
})
