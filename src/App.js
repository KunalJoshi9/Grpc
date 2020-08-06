import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import useForm from "./components/useForm";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({ hits: [] });
  const parentFunction=(data_from_child)=>{
    console.log(data_from_child);
    setData(data_from_child);
  }


  return (
    <div className="App">
      <RoomList/>
      <MessageList valueFromParent={data}/>
      <SendMessageForm functionCallFromParent={parentFunction}/>
      <NewRoomForm/>
    </div>
  );
}

export default App;
