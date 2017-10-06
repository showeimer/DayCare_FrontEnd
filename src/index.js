import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/meyers_reset.css'
import './styles/global.css'
import './index.css';

// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import DashboardLayout from './components/DashboardLayout';
import Login from './containers/Login';
import Registration from './containers/Registration';
import Dashboard from './containers/Dashboard';
import Group from './containers/Group';
import DailyReport from './containers/DailyReport';
import CreateGroup from './containers/CreateGroup';
import CreateChild from './containers/CreateChild';
import ManageGroups from './containers/ManageGroups';
import Roster from './containers/Roster';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk, createLogger())(createStore)

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path ="/register" component={Registration} />
          <DashboardLayout>
            <Route path="/dashboard/:group/:id" component={DailyReport} />
            <Route path="/dashboard/:group" component={Group} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/roster" component={Roster} />
            <Route path="/manage/groups/create" component={CreateGroup} />
            <Route path="/manage/groups" component={ManageGroups} />
            <Route path="/manage/children/create" component={CreateChild} />
          </DashboardLayout>
        </Switch>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
