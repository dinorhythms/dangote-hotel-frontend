import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { loadUser } from './actions/authActions';

import Layout from './components/layouts';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import Auth from './services/Auth';
import ReservationDetails from './pages/reservation/ReservationDetails';

import './App.css';
import './index.css';
import ServiceDetails from './pages/reservation/ServiceDetails';
import Reservations from './pages/reservation/Reservations';
import Services from './pages/reservation/Services';

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
              <Route exact path="/reservation" component={Reservations}/>
              <Route exact path="/reservation/:id" component={ReservationDetails}/>
              <Route exact path="/service" component={Services}/>
              <Route exact path="/service/:id" component={ServiceDetails}/>
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
