import './NavBar.scss'
import { useState } from 'react'
import axios from 'axios'
import useToken from '../../hooks/useToken'
import useApplicationData from '../../hooks/useApplicationData'
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const { state } = useApplicationData();
  const { token, setToken } = useToken()
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })



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



  async function loginUser(credentials) {
    return fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => {
        data.json()
      })
  }
  const handleLoginSubmit = async e => {
    e.preventDefault()
    await loginUser(loginData)
    setToken(loginData.email)
    window.location.reload()
  }
  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    axios.put('/users/register', registerData)
    .then(() => {
      setToken(registerData.email)
      window.location.reload()
    })
  }

  const handleLogoutClick = (e) => {
    e.preventDefault()
    sessionStorage.clear()
    window.location.reload()
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
          {token ?
              <li>Welcome {token}</li>
            :
              <li>
                <a href="/register" className='navbar-link' onClick={handleRegisterClick}>
                  Register
                </a>
              </li>
          }
          {!token ?
              <li>
                <a href="/login" className='navbar-link' onClick={handleLoginClick}>
                  Login
                </a>
              </li>
        : null }

          {token ?
          <li>
            <a href="/logout" className='navbar-link' onClick={handleLogoutClick}>
              Logout
            </a>
          </li>
          : null }
          <li>
          <Link to="my-profile" state={state} className='navbar-link'>
          My Profile
      </Link>  
          </li>
        </ul>
      </nav>
      {login ?
        <div>
          <form className="form-inline">
            <label htmlFor='login-email' className="form-label">Email: </label>
            <input className="form-input" type="email" id="login-email" name="login-email" onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))} />
            
            <label htmlFor='login-password' className="form-label">Password: </label>
            <input className="form-input" type="password" id="login-password" name="login-password" onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))} />
            
            <button className='form-btn' type="submit" onClick={handleLoginSubmit}>Login</button>
          </form>
        </div>
        : null}
      {register ?
        <div>
          <form className="form-inline">
            <label htmlFor="register-name" className="form-label">Name: </label>
            <input className="form-input" type="text" id="register-name" name="register-name" onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))} />
            
            <label htmlFor="register-email" className="form-label">Email: </label>
            <input className="form-input" type="email" id='register-email' name='register-email' onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))} />
            
            <label htmlFor="register-password" className="form-label">Password: </label>
            <input className="form-input" type="password" id="register-password" name="register-password" onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))} />
            
            <button className='form-btn' type="submit" onClick={handleRegisterSubmit}>Register</button>
          </form>
        </div>
        : null}
    </section>
  )
}