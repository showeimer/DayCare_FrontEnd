import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// Import Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import Components
import Login from "./containers/Login"

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <DashboardLayout>
            <Route path="/dashboard/:group/:id" component={DailyReport}/>
            <Route path="/dashboard/:group" component={Group}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" component={Login}/>
          </DashboardLayout>
        </Switch>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
