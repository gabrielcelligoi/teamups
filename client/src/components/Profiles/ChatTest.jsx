import {useEffect, useState} from 'react'
import { useLocation }from 'react-router-dom'
import useToken from '../hooks/useToken'
import axios from 'axios'
export default function Chat(props) {


  const { token, setToken } = useToken()

  console.log("token", token)
  let location = useLocation()

  useEffect(() => {
    const email = {email: token}
    axios.put('/users/current', email)
      .then(data => {
        const currentUser = data.data[0]

        console.log("CURRENT", currentUser)
      })
  }, [])
  return (
    <div>
      <p>test</p>
    </div>
  )
}