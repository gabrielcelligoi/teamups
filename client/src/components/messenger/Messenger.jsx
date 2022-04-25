import './Messenger.scss';
import Conversation from './Conversation';
import Message from './Message';
import ChatOnline from './ChatOnline';
import useToken from '../../hooks/useToken';
import useApplicationData from '../../hooks/useApplicationData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Messenger() {

  
  const { token, setToken } = useToken()
  const [userId, setUserId] = useState();
  const [conversations, setConversations] = useState([])

  console.log("token", token)
  let location = useLocation()

  useEffect(() => {
    const email = {email: token}
    axios.put('/users/current', email)
      .then(data => {
        const currentUser = data.data.id
        setUserId(data.data.id)
        console.log("data is", data)
        console.log("CURRENT", currentUser)
      })
  }, [])

  useEffect(() => {
    axios.get(`api/conversations/1`)
      .then(data => {
        setConversations(data.data)
      })
  }, [userId])
  

  return (
    <div className='messenger'>


      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='Search for friends' className='chatMenuInput' />
          {conversations.map(c => (
            <Conversation 
              conversation={c}
              currentUserId={userId}
            />
          ))}
          
          
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
          </div> 
          <div className="chatBoxBottom">
            <textarea className='chatMessageInput' placeholder='write something...'></textarea>
            <button className='chatSubmitButton'>Send</button>
          </div>
        </div>
      </div>
      
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
        </div>
      </div> 
    </div>
  )
}