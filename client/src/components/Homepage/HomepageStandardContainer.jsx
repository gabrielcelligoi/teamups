import './HomepageStandardContainer.scss'
import { Link } from 'react-router-dom'
import useApplicationData from '../../hooks/useApplicationData'

export default function HomepageStandardContainer(props) {
  const { state }  = useApplicationData()

  let containerClass = 'standard-container'

  if (props.mirror) {
    containerClass += "-mirror"
  }

  return (
    <div className={containerClass}>
      <img src={props.image} alt="" className='home-standard-img'/>

      <article>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Link to={props.link} state={state} style={{ textDecoration: 'none' }}>
          <button>{props.buttonText}</button>
        </Link>
      </article>

    </div>
  )
}