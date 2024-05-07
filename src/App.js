import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import About from './About';
import Gallery from './Gallery';
import Services from './Services';
import CreateAcc from './CreateAcc';
import Member from './Member';
import { UserProvider } from "./UserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unrecognizedMember, setUnrecognizedMember] = useState(false);

  // Function to handle login
  const handleLogin = (username) => {
    if (username !== '') {
      setIsLoggedIn(true);
      setUnrecognizedMember(false);
      console.log('nothing')
    } else {
      setIsLoggedIn(false);
      setUnrecognizedMember(true);
      alert('Unrecognized Member');
      console.log('soomething')

    }
  };
  

  return (
    <Router>
      <div className="app">
        <div className="contentInIt">
          <UserProvider>
            <Switch>
              <Route exact path='/'>
                <NavBar />
                <Home />
              </Route>
              <Route path='/signUp' >
                <SignUp handleLogin={handleLogin} />
              </Route>
              <Route path='/about'>
                    <NavBar />
                    <About />
                  </Route>
              <Route path='/createAcc'>
                <CreateAcc />
              </Route>
              <Route path='/member'>
  {isLoggedIn ? <Member /> : <Redirect to="/signUp" />}
</Route>
<Route path='/services'>
  {isLoggedIn ?  <Services />: <Redirect to="/signUp" />}
</Route>
<Route path='/gallery'>
  {isLoggedIn ?  <Gallery/>: <Redirect to="/signUp" />}
</Route>
            </Switch>
          </UserProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
