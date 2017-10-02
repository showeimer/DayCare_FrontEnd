import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/meyers_reset.css'
import './index.css';


// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import DashboardLayout from './components/DashboardLayout';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Group from './containers/Group';
import DailyReport from './containers/DailyReport';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <DashboardLayout>
            <Route path="/dashboard/:group/:id" component={DailyReport}/>
            <Route path="/dashboard/:group" component={Group}/>
            <Route path="/dashboard" component={Dashboard}/>
          </DashboardLayout>
        </Switch>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
