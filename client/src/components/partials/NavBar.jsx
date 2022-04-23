import './NavBar.scss'
import { useState } from 'react'

export default function NavBar(props) {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  const handleLoginClick = (e) => {
    e.preventDefault()
    if (register) {
      setRegister(false)
    }
    setLogin(value => !value)
    console.log("login", login)
  }

  const handleRegisterClick = (e) => {
    e.preventDefault()
    if (login) {
      setLogin(false)
    }
    setRegister(value => !value)
    console.log("register", register)
  }
  return (
    <section>

      <nav>
        <div className='logo'>
          <a href="/" className='logo-name'>
            TeamUps
          </a>
        </div>
        <ul>

          <li>
            <a href="/register" className='navbar-link' onClick={handleRegisterClick}>
              Register
            </a>
          </li>

          <li>
            <a href="/login" className='navbar-link' onClick={handleLoginClick}>
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
      {login ? 
      <div>
        <h1> Login test</h1>
      </div>
      : null}
      {register ?
      <div>
        <h1>Register Test</h1>
      </div>
      : null}
    </section>
  )
}