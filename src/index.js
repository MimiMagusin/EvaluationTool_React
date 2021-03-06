import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import signIn from './components/users/sign-in'
import BatchesContainer from './components/BatchesContainer'
import BatchesShow from './components/BatchesShow'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BatchesContainer } />
        <Route path="/sign-in" component={signIn} />
          <Route path="/batches/:batchId" component={BatchesShow} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
