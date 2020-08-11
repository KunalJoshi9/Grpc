import React, { useState, useEffect, useCallback } from 'react';
import useForm from "./useForm";

function SendMessageForm(props) {

    const { url, data, message, screenMessage, handleChange, handleSubmit } = useForm(login, props);
    //const [data, setData] = useState({ hits: [] });
    
    function login() {
        console.log(data);
    }
    
    useEffect(() => {
        console.log(data);
        props.functionCallFromParent(data);
     }, [data]);

     useEffect(() => {
        console.log(screenMessage);
        props.functionCallFromParent(screenMessage);
     }, [screenMessage]);

    const DUMMY_DATA = [
        {
            senderId: 'kunal',
            text: 'Hey, howz it going?'
        },
        {
            senderId: 'Shru',
            text: 'I am great, how about you?'
        },
        {
            senderId: 'kunal',
            text: 'Fine, thanks for asking!?'
        }
    ]
    return (
        <form className="send-message-form" onSubmit={handleSubmit}>
            <input value={message} onChange = {handleChange} 
            placeholder="Type your message and hit ENTER" type="text" 
            />
        </form>
    );
  }

  export default SendMessageForm;
  