import './HomepageLink.scss'
import { Link } from 'react-router-dom'
import useApplicationData from '../../hooks/useApplicationData'

export default function HomepageLink(props) {
  const { state }  = useApplicationData()

  return (
    <div className='home-container-link'>
      <Link to={props.link} state={state}>
        <img src={props.image} alt="" className='home-img-link'/>
      </Link>
      <div className='home-txt-link'>
        <h2>{props.frase}</h2>
      </div>
    </div>
  )
}

