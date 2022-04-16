import './HomepageIcon.css'
import icon1 from '../images/icon-chat.png'
import icon2 from '../images/icon-team.png'
import icon3 from '../images/icon-tournament.png'

export default function HomepageIcon(props) {
  

  return (
    <div className='home-container-icon'>
      <img src={props.icon} alt="" className='home-img-icon'/>
      <div>
        <h2>{props.frase}</h2>
      </div>
    </div>    
  )
}