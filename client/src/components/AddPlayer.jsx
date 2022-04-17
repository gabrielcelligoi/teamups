import './AddPlayer.css'
import { useState } from 'react'
import useApplicationData from '../hooks/useApplicationData'

export default function AddPlayer(props) {

  const [user, setUser] = useState("")
  const { addPlayerToMatch } = useApplicationData()
  const handleClick = (e) => {
    e.preventDefault()
    addPlayerToMatch(user, props.id)
  }

  return (
    <section>
      <form>
      <h2>Add Match Player</h2>
      <label htmlFor='add-user-id'>Insert User Id: </label>
      <input type="text" id='add-user-id' name='add-user-id' onChange={(e) => setUser(Number(e.target.value))} />
      <button type="submit" onClick={handleClick}>Add</button>
      </form>
    </section>
  )
}