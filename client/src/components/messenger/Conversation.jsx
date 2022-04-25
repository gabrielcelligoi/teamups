import { useEffect, useState } from 'react';
import './Conversation.scss';
import axios from 'axios';

export default function Conversation({conversation, currentUser}) {

  const [reciever, setReciever] = useState(null)



  useEffect(() => {
    axios.get(`api/profiles/${conversation.receiver_id}`)
      .then(data => {
        // console.log("this is the friend profile: ", data.data[0])
        setReciever(data.data[0])
      })
  }, [conversation, currentUser])

  if (reciever) {
    console.log(reciever.name)
  }
  

  return (
    <div className='conversation'>
      <img className='conversationImg' src={reciever ? reciever.image : null} alt='' />
      <span className='conversationName'>{reciever ? reciever.name : null}</span>

    </div>
  )
}