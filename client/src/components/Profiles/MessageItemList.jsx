import { useEffect, useState } from "react";
import axios from "axios";
import MessageItem from "./MessageItem";
import useToken from "../../hooks/useToken";
export default function MessageItemList(props) {

  const { token, setToken } = useToken()
  const [messages, setMessages] = useState()
  useEffect(() => {
    const data = {
      id: props.id
    }
    axios.put('/api/messages', data)
      .then((data) => {
        setMessages(data.data)
        console.log(messages)
      })
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
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
      <form>
        <textarea id="message-post" name="message-post" placeholder="Post A Message!"></textarea>
        <button type="submit" onClick={handleClick}>Post</button>
      </form>
    </section>
  )
}