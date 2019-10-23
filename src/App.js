import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { loadUser } from './actions/authActions';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import Auth from './services/Auth';

import './App.css';
import './index.css';
import Layout from './components/layouts';

function App() {

  useEffect(() => {
    loadUser()
  },[])
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Auth>
            <Layout>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path='/profile' component={ProfilePage} />
              <Route path='/tables' component={TablesPage} />
            </Layout>
          </Auth>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
