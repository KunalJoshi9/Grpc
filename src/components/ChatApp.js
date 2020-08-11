import React from 'react';
import RoomList from './RoomList'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import NewRoomForm from './NewRoomForm'
import useForm from "./useForm";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ChatApp(props) {
  const [data, setData] = useState({ hits: [] });
  const [screenMessage, setScreenMessage] = useState([{username: '', message:''}]);

  const history = useHistory();
  const histState = history.location.state;
  const prevUrl = histState === undefined ? '/init' : histState.from;
  const username = histState.userName;

  const parentFunction=(data_from_child)=>{
    console.log(data_from_child);
   // setData(data_from_child);
   setScreenMessage(data_from_child);
  }

  console.log(username);
    // Form was submitted, now show the main App
    return (
      <div>
     { ! (prevUrl === '/login')
      ?
     <div> 
      <h1>
          Please <a href="http://localhost:3000/init">Login</a> first
      </h1>
     </div>
     : 
        <div  className="App">
          <RoomList/>
          <MessageList valueFromParent={screenMessage} username={username}/>
          <SendMessageForm functionCallFromParent={parentFunction} username={username}/>
          <NewRoomForm/>
      </div>
    }
    </div>
    );
}


export default ChatApp;
