import { useEffect, useState } from "react";
import axios from "axios";
import MessageItem from "./MessageItem";
import useToken from "../../hooks/useToken";
export default function MessageItemList(props) {

  const { token, setToken } = useToken()
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

  const handleClick = (e) => {
    e.preventDefault()
    const data = {
      message_to: props.id,
      message: messageText,
      message_from: current.id
    }

    axios.put('/api/postmessage', data)
      .then((data) => {
        console.log("data", data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    
    <section>
      {messages ?
      <div>
        {messages.map(message => {
          console.log(message)
          return (
            <MessageItem 
              to={message.message_to}
              text={message.message_text} 
              from={message.message_from} />
          )

        })}
      </div>
      : null}
      {current ?
      <form>
        <textarea id="message-post" name="message-post" placeholder="Post A Message!" onChange={(e) => setMessageText(e.target.value)}></textarea>
        <button type="submit" onClick={handleClick}>Post</button>
      </form>
      : null}
    </section>
  )
}