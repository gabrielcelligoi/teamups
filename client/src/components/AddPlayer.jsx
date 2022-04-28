import './AddPlayer.scss'
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

    setTimeout(() => {
      props.update()
    }, 300)
    
    
  }

  const handleAddAnother = (e) => {
    e.preventDefault()
    setAdded(false)
  }
  return (
    <section>
        {!added ? 
      <form>
      <h4>Add Match Player</h4>
      <label htmlFor='add-user-id'>Insert User Id: </label>
      <input type="text" id='add-user-id' name='add-user-id' onChange={(e) => setUser(Number(e.target.value))} />
      <button class="btn btn-dark btn-sm" type="submit" onClick={handleClick}>Add</button>

      </form>
    : <div>
        <h4>Player Added</h4>
        <button class="btn btn-dark btn-sm" type="submit" onClick={handleAddAnother}>Add Another Player</button> 
      </div>}
    </section>
  )
}