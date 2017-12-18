import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthorizedRoute = ({ component: Component, path, isProfileCreated, getNextStep, ...rest }) => (
  <Route {...rest} path={path} render={props => {
    const nextStep = getNextStep()
    if (isProfileCreated || path === nextStep) {
      return <Component {...props} />
    }

    return <Redirect to={nextStep} />
  }} />
)

export default connect(
  (state, ownProps) => ({
    isProfileCreated: state.isProfileCreated,
    getNextStep: () => {
      if (state.isProfileCreated) {
        return ownProps.path // allow access to any route
        /**

         Sometimes after user has been successfully logged we want to make manual redirect from registration-pages
         to something like landing page or dashboard:

         if (['/', '/create-profile', '/confirm-email'].includes(ownProps.path)) {
           return '/dashboard';
         }

         * */
      }
      if (state.isEmailConfirmed) {
        return '/create-profile'
      }
      if (state.isLoggedIn) {
        return '/confirm-email'
      }

      return '/'
    }
  }),
)(AuthorizedRoute)