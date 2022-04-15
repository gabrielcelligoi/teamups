import {Link} from 'react-router-dom'
import styles from './NavBar.css'

export default function NavBar(props) {
  return (
    <nav>
      <div className='logo'>
        <Link to="/">SPORTS</Link>
      </div>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  )
}