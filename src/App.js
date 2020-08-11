import React from 'react';
import './App.css';
import ChatApp from './components/ChatApp'
import HomeButton from './components/HomeButton'
import { useState, useEffect  } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  
  const [data, setData] = useState({ hits: [] });
  const [userDetails, setUserDetails] = useState({
    username: '', 
    password: '', 
    token: '',
    submitted: false,
  });
 
  const parentFunction=(data_from_child)=>{
    console.log(data_from_child);
    setData(data_from_child);
  }

  

  return (
    <div className = "app">
    <Router>
      <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/init">
        {/* <HomeButton/> */}
      <Login/>
      </Route>
        <Route exact path="/chat">
          <ChatApp username={userDetails.username} token={userDetails.token} submitted={userDetails.submitted}/>
        </Route>
        </Switch>
    </Router>
    
    </div>
  );
}

export default App ;
