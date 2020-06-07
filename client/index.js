import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/home'
import Login from '../components/login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import getStore from '../components/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={getStore()}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
