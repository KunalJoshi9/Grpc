import React from 'react';



function Message(props) {
    console.log(props.username);
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
      <div className="message">
            <div className="message-username">{props.username}</div>
            <div className="message-text">{props.title}</div>
      </div>
    );
  }
  
  export default Message;
  