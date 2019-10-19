import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { loadUser } from './actions/authActions';
import Login from './components/authentication/login';
import Dashboard from './components/dashboard';

function App() {

  useEffect(() => {
    loadUser()
  })
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
