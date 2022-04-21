import './SportItem.scss'

export default function SportItem(props) {
  return(
    <div>
      
      <img src={props.sport_image} alt={props.sport_name} className="sport-item"/>
      
    </div>
  )
}