import './ChatOnline.scss';

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
          className='chatOnlineImg'
            src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg'
            alt='' />
          <div className="chatOnlineBadge"></div>  
        </div>
        <span className="chatOnlineName">John</span>
      </div>

    </div>
  )
}