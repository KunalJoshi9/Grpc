import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
const { LoginRequest, LoginResponse } = require('./chat_pb.js');
const { ChatServerClient } = require('./chat_grpc_web_pb.js');

const useForm = (callback, props) => {

  const [message, setMessage] = useState('');
  const [data, setData] = useState({hits: [], url:''});
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
 

  const  client = new ChatServerClient('http://localhost:9090', null, null);

  const handleSubmit =  event => {
        event.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${message}`);
       
        //console.log(result);
        //console.log(url)
        //console.log(query);
        //callback();
    };

    const fetchData = async () => {
        const result = await axios(url);
        setData({hits: result.data.hits, url:url});
    };

    useEffect(() => {
        console.log("In effect");
        console.log(url);
        fetchData();
     }, [url]);


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
  }
};

export default useForm;