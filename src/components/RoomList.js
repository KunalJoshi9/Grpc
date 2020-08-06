import React from 'react';



function RoomList() {

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
      <div className="rooms-list">
         Room List
      </div>
    );
  }
  
  export default RoomList;
  