import './Message.scss'

export default function Message({message, own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className='messageImg'
          src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg'
          alt='' />
        <p className='messageText'>{message.message_txt}</p>
      </div>

      <div className="messageBottom">{message.message_date}</div>

    </div>
  )
}