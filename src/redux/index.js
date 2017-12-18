import { createStore } from 'redux'

const INITIAL_STATE = {
  isLoggedIn: false,
  isEmailConfirmed: false,
  isProfileCreated: false,
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}


export default function() {
  return createStore(reducer);
}