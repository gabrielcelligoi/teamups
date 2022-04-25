import { useEffect, useState } from 'react';
import './Conversation.scss';

export default function Conversation({conversation, currentUserId}) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const
  }, [])


  return (
    <div className='conversation'>
      <img className='conversationImg' src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg' alt='' />
      <span className='conversationName'>John</span>

    </div>
  )
}