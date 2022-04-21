
import './UpcomingMatchItem.scss'

export default function UpcomingMatchItem(props) {

  const date = new Date(props.date).toLocaleDateString('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  const time = new Date(props.date).toLocaleTimeString('en', {
    hour: 'numeric',
    minute: 'numeric'
  })

  return (
    <div className="match-item">
        <img src={props.sport_image} alt={props.sport} className='upcoming-sport-icon'/>

      <div className='upcoming-match-text'>
        <div className='upcoming-inline-info'>          
          <i className="fa-solid fa-calendar" id='upcoming-inline-info-icon'></i>          
          <h3 className='upcoming-inline-info-element'>{date}</h3>          
        </div>

        <div className='upcoming-inline-info'>
          <i className="fa-solid fa-clock" id='upcoming-inline-info-icon'></i>
          <h4 className='upcoming-inline-info-element'>{time}</h4>
        </div>

        <div className='upcoming-inline-info'>            
          <i className="fa-solid fa-location-dot" id='upcoming-inline-info-icon'></i>          
          <h4 className='upcoming-inline-info-element'>{props.location}</h4>
        </div>

        <h4 id='upcoming-inline-info-icon'>vs</h4>
        <h4 className='upcoming-inline-info-element'>{props.player}</h4>
      </div>

    </div>
  )
}

