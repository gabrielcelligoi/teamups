
import styles from './NavBar.css'

export default function NavBar(props) {
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
          <a href="/my-profile" className='navbar-link'>
            My Profile
          </a>          
        </li>

      </ul>
    </nav>
  )
}