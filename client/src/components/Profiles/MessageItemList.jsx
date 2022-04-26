import { useEffect, useState } from "react";
import axios from "axios";
import MessageItem from "./MessageItem";
import useToken from "../../hooks/useToken";
import './MessageItemList.scss'
export default function MessageItemList(props) {

  const { token, setToken } = useToken()
  const [users, setUsers] = useState()
  const [messages, setMessages] = useState()
  const [current, setCurrent] = useState()
  const [update, setUpdate] = useState(false)
  const [messageText, setMessageText] = useState()

  useEffect(() => {
    const data = {
      id: props.id
    }
    axios.put('/api/messages', data)
      .then((data) => {
        setMessages(data.data)
        console.log(messages)
      })
  }, [update])

  useEffect(() => {
    const email = {email: token}
    axios.put('/users/current', email)
      .then(data => {
        setCurrent(data.data)
        console.log("CURRENT", current)
      })
  }, [])

  useEffect(() => {
    axios.get('/users')
      .then(data => {
        setUsers(data.data)
      })
  }, [])


  const handleClick = (e) => {
    e.preventDefault()
    const data = {
      message_to: props.id,
      message: messageText,
      message_from: current.id
    }

    axios.put('/api/postmessage', data)
      .then((data) => {
        console.log(data)
        setUpdate(value => !value)
        const messageBox = document.getElementById("message-post")
        messageBox.value = ""
      })
  }
  return (
    
    <section>
      {messages && users ?
      <div className="message-container">
        {messages.map(message => {
          console.log(message)
          return (
            <MessageItem 
              to={message.message_to}
              text={message.message_text} 
              from={message.message_from} 
              users={users}/>
          )

        })}
      </div>
      : null}
      {current ?
      <form class="message-post">
        <textarea className ="form-control" id="message-post" name="message-post" placeholder="Post A Message!" onChange={(e) => setMessageText(e.target.value)}></textarea>
        <button className="btn btn-dark" type="submit" onClick={handleClick}>Post</button>
      </form>
      : null}
    </section>
  )
}