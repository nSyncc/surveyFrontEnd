'use strict'
const store = require('./store.js')

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
}