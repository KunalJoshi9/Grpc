import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Message from './Message';


function MessageList(props) {
  /*
  const [data, setData] = useState({ hits: [] });

  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
 
      setData(result.data);
    };
 
    fetchData();
  }, [url]);
*/
const [values, setValues] = useState({ hits: [], url:'' });
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
    const val = props.valueFromParent.hits;
    const url = props.valueFromParent.url;
    useEffect(() => {
        console.log(url);
        if(countProps(val)>0 && url!=values.url){
            setValues({hits: val, url: url});
            console.log(val);
        }
     }, [val]);
    console.log(values);
     function countProps(obj) {
        var count = 0;
        for (var p in obj) {
            count++;
        }
        return count; 
    }
    
    return (
        <div className = "message-list">
         {
            values.hits.map(item => (
                    <Message key={item.objectID} username={item.title} title ={item.url}></Message>
            ))} 
        </div>
    );
  }
  
  export default MessageList;
  