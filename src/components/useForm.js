import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import db from './firebase';
import firebase from 'firebase';
import MessageList from './MessageList';
const { LoginRequest, LoginResponse } = require('./chat_pb.js');
const { ChatServerClient } = require('./chat_grpc_web_pb.js');

const useForm = (callback, props) => {

  const [message, setMessage] = useState('');
  const [data, setData] = useState({hits: [], url:''});
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
  const [screenMessage, setScreenMessage] = useState([{message: '', username:'', timestamp:''}]);

  const  client = new ChatServerClient('http://localhost:9090', null, null);

  const handleSubmit =  event => {
        event.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${message}`);
       
        //console.log(result);
        //console.log(url)
        //console.log(query);
        //callback();
        fetchData();
    };

    const fetchData = async () => {
        //const result = await axios(url);
        //setData({hits: result.data.hits, url:url});
        //setScreenMessage({user:'kunal',msg:message});
        db.collection('messages').add({
          message: message,
          username: props.username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage('');
    };

    // useEffect(() => {
    //     console.log("In effect");
    //     console.log(url);
    //     fetchData();
    //  }, [url]);

     useEffect(() => {
      db.collection('messages').onSnapshot(snapshot => {
        setScreenMessage(snapshot.docs.map(doc => doc.data()))
      })
     }, []);


  const handleChange =  event => {
    //event.persist();
    // debugger;
    const value = event.target.value;
    setQuery(value)
    setMessage(value);
    
  };

  return {
    handleChange,
    handleSubmit,
    message,
    data,
    url,
    screenMessage,
  }
};

export default useForm;