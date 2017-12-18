import React, { Component } from 'react'
import { Switch, Link, Redirect } from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'
import ConfirmEmail from './pages/ConfirmEmail'
import CreateProfile from './pages/CreateProfile'
import Dashboard from './pages/Dashboard'
import AuthorizedRoute from './components/AuthorizedRoute'

class App extends Component {
  render () {
    return (
      <div>
        <nav>
          <Link to="/">create account</Link>
          <Link to="/confirm-email">confirm email</Link>
          <Link to="/create-profile">create profile</Link>
          <Link to="/dashboard">dashboard</Link>
        </nav>
        <Switch>
          <AuthorizedRoute exact path="/" component={CreateAccount} />
          <AuthorizedRoute path="/confirm-email" component={ConfirmEmail} />
          <AuthorizedRoute path="/create-profile" component={CreateProfile} />
          <AuthorizedRoute path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
