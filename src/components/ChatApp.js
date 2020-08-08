import React from 'react';
import RoomList from './RoomList'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import NewRoomForm from './NewRoomForm'
import useForm from "./useForm";
import { useState, useEffect } from "react";

function ChatApp() {
  const [data, setData] = useState({ hits: [] });
  const [userDetails, setUserDetails] = useState({
    username: '', 
    password: '', 
    token: '',
  });
  const parentFunction=(data_from_child)=>{
    console.log(data_from_child);
    setData(data_from_child);
  }

    // Form was submitted, now show the main App
    return (
      <div className="App">
      <RoomList/>
      <MessageList valueFromParent={data}/>
      <SendMessageForm functionCallFromParent={parentFunction}/>
      <NewRoomForm/>
    </div>
    );
}


export default ChatApp;
