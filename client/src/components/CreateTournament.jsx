import './CreateTournament.css'
import useApplicationData from '../hooks/useApplicationData';
import { createSingle } from '../helpers/tournaments';
import { useState } from "react";
import { getSportId } from '../helpers/selectors';
import { Link, useLocation } from "react-router-dom";
import TournamentItem from './TournamentItem';

export default function CreateTournament(props) {
  let location = useLocation();
  const id = Number(location.state.tournaments.length) + 1
  
  const [sport, setSport] = useState("Basketball")
  const [name, setName] = useState("")
  const [type, setType] = useState('single')
  const [players, setPlayers] = useState()
  const [create, setCreate] = useState(false)

  const { createNewTournament } = useApplicationData()
  const handleClick = (e) => {
    e.preventDefault()
    const sportId = getSportId(sport, location.state)
    const numMatches = createSingle(players)

    createNewTournament(name, sportId, players, type, numMatches.totalMatches)
      .then((data) => {
        console.log("new", id)
        setCreate(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const sportsArr = location.state.sports.map(sport => {
    return sport = sport.name
  })
  return (
    <section>

      <div>
      <h1>Create A Tournament</h1>
      <form>
        <label htmlFor='create-tournament-name'>Tournament Name: </label> 
        <input type='text' id='create-tournament-name' name='create-tournament-name' onChange={(e) => setName(e.target.value)}/>
        <label htmlFor='create-tournament-type'>Select Type: </label>
        <select id="create-tournament-type" name='create-tournament-type'>
          <option value="Single Elimination">Single Elimination</option>
        </select>
        <label htmlFor='create-tournament-players'>Number Of Players: </label>
        <input type="text" id='create-tournament-players' name='create-tournament-players' onChange={(e) => setPlayers(e.target.value)}/>
        <select id="create-tournament-sport" name='create-tournament-sport' onChange={(e) => setSport(e.target.value)}>
          {sportsArr.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <button type='submit' onClick={handleClick}>Create</button>
      </form>
    </div>
    {create ?
    <div>
      <h1>Tournament Created!</h1>
      <Link to={`/tournaments/${id}`} state={id} >
        <button>Manage Tournament</button>
      </Link>
      <button onClick={(e) => setCreate(false)}>back</button>
    </div>
    : null}

  </section>
  )
}