import './AddPlayer.css'
import { useState } from 'react'
import useApplicationData from '../hooks/useApplicationData'

export default function AddPlayer(props) {

  const [user, setUser] = useState("")
  const [added, setAdded] = useState(false)
  const { addPlayerToMatch } = useApplicationData()
  const handleClick = (e) => {
    e.preventDefault()
    addPlayerToMatch(user, props.id)
    setAdded(true)
  }

  const handleAddAnother = (e) => {
    e.preventDefault()
    setAdded(false)
  }
  return (
    <section>
        {!added ? 
      <form>
      <h2>Add Match Player</h2>
      <label htmlFor='add-user-id'>Insert User Id: </label>
      <input type="text" id='add-user-id' name='add-user-id' onChange={(e) => setUser(Number(e.target.value))} />
      <button type="submit" onClick={handleClick}>Add</button>

      </form>
    : <div>
        <h2>Player Added</h2>
      </div>}
    </section>
  )
}