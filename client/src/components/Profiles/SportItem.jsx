import './SportItem.scss'

export default function SportItem(props) {
  return(
    <div>
      
      <div className='sport-item-container'>
      <img src={props.sport_image} alt={props.sport_name} className="sport-item"/>
      <p className='sport-item-name'>{props.sport_name}</p>
      </div>

    </div>
  )
}