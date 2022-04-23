import useApplicationData from '../../hooks/useApplicationData'
import { Link } from 'react-router-dom'
import styles from './NavBar.scss'

export default function NavBar(props) {
  const { state } = useApplicationData();
  return (
    <nav>
      <div className='logo'>
      <a href="/" className='logo-name'>
        TeamUps
      </a>
      </div>
      <ul>

        <li>
          <a href="/register" className='navbar-link'>
            Register
          </a>          
        </li>

        <li>
          <a href="/login" className='navbar-link'>
            Login
          </a>          
        </li>

        <li>
          <a href="/logout" className='navbar-link'>
            Logout
          </a>          
        </li>

        <li>
        <Link to="my-profile" state={state} className='navbar-link'>
          My Profile
      </Link>      
        </li>

      </ul>
    </nav>
  )
}