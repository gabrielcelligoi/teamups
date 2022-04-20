import './HomepageLink.scss'


export default function HomepageLink(props) {
  return (
    <div className='home-container-link'>
      <a href={props.link}>
        <img src={props.image} alt="" className='home-img-link'/>
      </a>
      <div className='home-txt-link'>
        <h2>{props.frase}</h2>
      </div>
    </div>
  )
}