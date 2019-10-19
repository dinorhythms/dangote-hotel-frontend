import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { loadUser } from './actions/authActions';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {

  useEffect(() => {
    loadUser()
  })
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
