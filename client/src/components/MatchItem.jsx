import './MatchItem.scss';
import AddPlayer from './AddPlayer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllMatches } from '../helpers/selectors';
export default function MatchItem(props) {

const [add, setAdd] = useState()
const [update, setUpdate] = useState(false)
const [players, setPlayers] = useState()
useEffect(() => {
  axios.get(`/api/matches/${props.id}`)
    .then((data) => {
      const match = getAllMatches(data.data)
      setPlayers(match[0].players)
    })

}, [update])

const handleClick = (e) => {
  setAdd(true)
  e.target.style.display = "none"
}

const handlePlayerAdded = () => {
  setAdd(false)
}

const updateComponent = (e) => {
  setUpdate(value => !value)
}
return ( 
  <section className="match-container">
    <ul>

      <h3>{props.date}</h3>
      <h3>{props.sport}</h3> 
      {players ? <h3>{players[0]} vs {players[1]}</h3> : <h3>{props.player1} vs {props.player2}</h3>}
      <h3>{props.location}</h3>  
      {props.tournament ? <h3>Tournament Match</h3> : <h3>Non Tournament Match</h3>}
      {props.addPlayer ? <button type="Submit" onClick={handleClick}>Add Player To Match</button> : null}
    </ul>
    {add ?
      <div>
        <AddPlayer 
        key={props.id}
        id={props.id}
        onSubmit={handlePlayerAdded}
        update={updateComponent}
        />
      </div>
      : null}
  </section>
)

}