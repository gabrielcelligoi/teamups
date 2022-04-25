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

  const [state, setState] = useState({
    token,
    currentUser: {},
    conversations: [],
    currentChat: null,
    messages: [],
    newMessage: ""
  })

  console.log("token", token)
  let location = useLocation()

  useEffect(() => {
    const email = {email: token}
    axios.put('/users/current', email)
      .then(data => {
        const currentUser = data.data.id
        setState({...state, currentUser: data.data})
        console.log("data is", data)
        console.log("CURRENT", currentUser)
      })
  }, [])

  useEffect(() => {
    axios.get(`api/conversations/1`)
      .then(data => {
        setState(prev => ({...prev, conversations: data.data}))
      })
  }, [state.currentUser])
  
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`api/messages/${state.currentChat?.id}`);
        setState(prev => ({...prev, messages: res.data}))
      } catch (err) {
        console.log(err);
      }
    };    
    getMessages();
  }, [state.currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: state.currentUser.id,
      text: state.newMessage,
      conversationId: state.currentChat.id
    }

    try{
      const res = await axios.put('api/messages', message)
      console.log("THIS IS DATA", res.data)
      setState(prev => ({...prev, messages: res.data})) //there is a bug here and the page doesn't refresh
      setState(prev => ({...prev, messages: ""}))
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <div className='messenger'>


      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='Search for friends' className='chatMenuInput' />
          {state.conversations.map(c => (
            <div onClick={() => setState(prev => ({...prev, currentChat: c}))}>
              <Conversation 
                conversation={c}
                currentUser={state.currentUser}
              />
            </div>
          ))}
          
          
        </div>
      </div>

      <div className="chatBox">
        <div className="chatBoxWrapper">
          {
            state.currentChat ?
            <div className="chatBoxTop">
              {state.messages.map(m => (
                <Message
                  message={m}
                  own={m.sender_id === state.currentUser.id}
                />
              ))}
            
          </div> 
          :
          <span className='noConversation'>Start a chat</span>
          }
          <div className="chatBoxBottom">
            <textarea
              className='chatMessageInput'
              placeholder='write something...'
              onChange={(e) => setState(prev => ({...prev, newMessage: e.target.value}))}
              value={state.newMessage}
            ></textarea>
            <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
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