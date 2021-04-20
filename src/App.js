import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Admin from './containers/admin/Admin'
import Login from './containers/login/Login'



export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    )
  }
}
