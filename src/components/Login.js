import React from 'react';

import {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { TextField, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';
import '../App.css';
import { FormLabel } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


function Login(props) {
    const classes = useStyles();
    const history = useHistory();
    const { LoginRequest, LoginResponse } = require('./chat_pb.js');
    const { ChatServerClient } = require('./chat_grpc_web_pb.js');
    const [userDetails, setUserDetails] = useState({
        username: '', 
        password: '', 
        token: '',
        submitted: false,
      });

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
        if(result.data.success === 'Login Successful!'){
          setUserDetails({
            ...userDetails,
            submitted : true,
          });
        history.push("/chat", 
        { 
            from: '/login',
            userName : userDetails.username,
        });
        }
    };

    return (
        <div className="login">
        <header>
          <h1 > Chat App</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <FormGroup controlId="username" size="lg">
            <FormLabel>UserName</FormLabel>
            <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Enter user name"
                variant="filled"
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
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
          </FormGroup>
          <Button size="lg" type="submit" variant="contained" size="large" color="primary" className={classes.margin}>
            Login
          </Button>
        </form>
    </div>
    );
}

export default  Login;