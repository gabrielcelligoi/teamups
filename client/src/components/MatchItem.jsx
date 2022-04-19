import './MatchItem.css';
import AddPlayer from './AddPlayer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useApplicationData from '../hooks/useApplicationData';
import { getPlayersPerMatch } from '../helpers/selectors';

export default function MatchItem(props) {

const [add, setAdd] = useState()
const [user, setUser] = useState("")
const [matches, setMatches] = useState()
const [players, setPlayers] = useState()

const { addPlayerToMatch } = useApplicationData()


useEffect(() => {
  axios.get(`/api/matches/all`)
    .then((res) => {
      setMatches(res.data)
      const current = getPlayersPerMatch(matches, props.id)
      console.log("current", current)
      // setPlayers(current.players)
    })
    .catch(error => {
      console.log(error)
    })
}, [players])

const handleClick = () => {
  setAdd(true)
}

const handleClick2 = (e) => {
  e.preventDefault()
  addPlayerToMatch(user, props.id)
  setAdd(false)
}

const handlePlayerAdded = () => {
  setAdd(false)
}

return ( 
  <section className="match-container">
    <ul>
      <h3>{props.date}</h3> 
      <h3>{props.sport}</h3> 
      {players ? <h3>{players[0]} vs {players[1]}</h3> : null}
      <h3>{props.location}</h3> 
      {props.addPlayer ? <button type="Submit" onClick={handleClick}>Add Player To Match</button> : null}
    </ul> 
    <section>
        {add ? 
      <form>
      <h2>Add Match Player</h2>
      <label htmlFor='add-user-id'>Insert User Id: </label>
      <input type="text" id='add-user-id' name='add-user-id' onChange={(e) => setUser(Number(e.target.value))} />
      <button type="submit" onClick={handleClick2}>Add</button>

      </form>
    : null }
    </section>
  </section>
)

}