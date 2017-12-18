import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthorizedRoute = ({ component: Component, isProfileCreated, isEmailConfirmed, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => {
    // if user is fully registered - grant him every route except registration steps.
    if (isProfileCreated) {
      if (['/', '/create-profile', '/confirm-email'].includes(props.location.pathname)) {
        return <Redirect to="/dashboard" />
      } else {
        return <Component {...props} />
      }
    }

    // user is not fully registered so he needs to be redirected to next step
    if (isEmailConfirmed) {
      if (props.location.pathname === '/create-profile') {
        return <Component {...props} />
      } else {
        return <Redirect to="/create-profile" />
      }
    }

    if (isLoggedIn) {
      if (props.location.pathname === '/confirm-email') {
        return <Component {...props} />
      } else {
        return <Redirect to="/confirm-email" />
      }
    }

    if (props.location.pathname === '/') {
      return <Component {...props} />
    }
    return <Redirect to="/" />
  }} />
)

export default connect(
  (state) => ({
    isProfileCreated: state.isProfileCreated,
    isEmailConfirmed: state.isEmailConfirmed,
    isLoggedIn: state.isLoggedIn,
  }),
)(AuthorizedRoute)