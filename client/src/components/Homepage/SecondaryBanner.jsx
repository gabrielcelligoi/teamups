import './Banner.scss'

import useApplicationData from '../../hooks/useApplicationData'
import { Link } from 'react-router-dom'

export default function SecundaryBanner () {
  const { state }  = useApplicationData()

  return (
    <div>
      <Link to="profiles" state={state} style={{ textDecoration: 'none' }}>
        <div className='banner'>
          <h1 className='front-txt'>Check out other players</h1>
        </div>
      </Link>
      

    </div>
  )
}