import { useEffect, useState } from 'react';
import './Conversation.scss';

export default function Conversation(props) {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const friendId = conversation.receiver_id;
  // }, [])


  return (
    <div className='conversation'>
      <img className='conversationImg' src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg' alt='' />
      <span className='conversationName'>{props.currentUserId}</span>

    </div>
  )
}