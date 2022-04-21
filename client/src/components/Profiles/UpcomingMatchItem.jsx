
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
      <h3>{date}</h3>
      <h4>{time}</h4>
      <h4>{props.sport}</h4>
      <h4>{props.player} vs </h4>
      <h4>{props.location}</h4>
    </div>
  )
}

