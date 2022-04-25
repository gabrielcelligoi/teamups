import { useEffect, useState } from 'react';
import './Conversation.scss';
import axios from 'axios';

export default function Conversation({conversation, currentUser}) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get(`api/profiles/${conversation.receiver_id}`)
      .then(data => {
        setUser(data)
      })
  }, [])


  return (
    <div className='conversation'>
      <img className='conversationImg' src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg' alt='' />
      <span className='conversationName'>John</span>

    </div>
  )
}