import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import ChatApp from './components/ChatApp'
import axios from 'axios';
import { useState, useEffect } from "react";


const { LoginRequest, LoginResponse } = require('./components/chat_pb.js');
const { ChatServerClient } = require('./components/chat_grpc_web_pb.js');
function App() {
  const client = new ChatServerClient('http://192.168.99.100:9090', null, null);

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

  const handleChange = event => {
    const value = event.target.value;
    setUserDetails({
      ...userDetails,
      [event.target.name]: value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    // login
    var request = new LoginRequest();
    request.setUsername(userDetails.username);
    request.setPassword(userDetails.password);

    // Grpc-web commented because of envoy not running on my windows
    /*
    client.login(request, {}, (err, response) => {
      if (response == null) {
         console.log(err)
       } else {
        setUserDetails({ submitted: true, username: userDetails.username, password: userDetails.password, token: response.getToken() });
       }
      });
      */
     login(request);
  };

  const login = async (request) => {
    const url = 'http://localhost:8080/login/username/kunal/password/123'; //springboot REST on 8080
    const result = await axios.post(url, {request})
    console.log(result);
};

  if (userDetails.submitted) {
    // Form was submitted, now show the main App
    return (
      <ChatApp client = {client} username={userDetails.username} token={userDetails.token} />
    );
  }

  return (
    <div className="Login">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Chat App</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <FormGroup controlId="username" size="lg">
            <FormLabel>UserName</FormLabel>
            <FormControl
              autoFocus
              size="lg"
              type="username"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormLabel>Password</FormLabel>
            <FormControl
              size="lg"
              value={userDetails.password}
              onChange={handleChange}
              type="password"
              name="password"
            />
          </FormGroup>
          <Button
            block
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
  );
}

export default App;
