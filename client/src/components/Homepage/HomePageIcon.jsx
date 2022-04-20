import './HomepageIcon.scss'

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