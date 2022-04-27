import './CreateTournament.scss'
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
  const [players, setPlayers] = useState(4)
  const [create, setCreate] = useState(false)

  const { createNewTournament } = useApplicationData()
  const handleClick = (e) => {
    e.preventDefault()
    const sportId = getSportId(sport, location.state.sports)
    const numMatches = players - 1

    createNewTournament(name, sportId, players, type, numMatches)
      .then((data) => {
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
    <section className='create-tournament-section'>

      <div className="create-tournament-container">
        <h1 className="create-tournament-title">Create A Tournament</h1>

        <form className="row g-3">

          <label htmlFor='create-tournament-name' className="form-label">Tournament Name: </label> 
          <input type='text' className="form-control" id='create-tournament-name' name='create-tournament-name' onChange={(e) => setName(e.target.value)}/>
          
          <label htmlFor='create-tournament-type' className="form-label">Select Type: </label>
          <select className="form-select" id="create-tournament-type" name='create-tournament-type'>
            <option value="Single Elimination">Single Elimination</option>          
          </select>

          <label htmlFor='create-tournament-players' className="form-label">Select Number Of Players: </label>
          <select className="form-select" id='create-tournament-players' name='create-tournament-players' onChange={(e) => setPlayers(e.target.value)}>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>  
          
          <label htmlFor='create-tournament-sport' className="form-label">Select Sport: </label>
          <select className="form-select" id="create-tournament-sport" name='create-tournament-sport' onChange={(e) => setSport(e.target.value)}>
            {sportsArr.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
         
          <button className='create-tournament-button' type='submit' onClick={handleClick}>Create</button>

        </form>
      </div>

      {create ?
      <div className='tournament-created-container'>
        <h1 className='tournament-created-title'>Tournament Created!</h1>
        <div className='tournament-created-btns-container'>
          <Link to={`/tournaments/${id}`} >
            <button className='tournament-created-btn'>Manage Tournament</button>
          </Link>
          <button className='tournament-created-back-btn' onClick={(e) => setCreate(false)}>back</button>
        </div>
      </div>
      : null}

    </section>
  )
}