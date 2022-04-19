import './TournamentItem.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { createSingle } from '../helpers/tournaments';
import CreateMatch from './CreateMatch';

export default function TournamentItem(props) {
  const [tournament, setTournament] = useState()
  const [modeMatches, setModeMatches] = useState(false)
  const [bracket, setBracket] = useState()
  let id = useParams()


  useEffect(() => {
    axios.get(`/api/tournaments/${id.tournament_id}`)
      .then((res) => {
        setTournament(res.data[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleMatchesClick = (e) => {
    e.preventDefault()
    setBracket(createSingle(tournament.number_of_players))
    console.log(bracket)
    setModeMatches(true)
  }
  return (
    <section>
    {tournament ? 
      <div>
        <h2>Manage {tournament.name}</h2>
        <div>Number of Players {tournament.number_of_players}</div>
        <div>Number of Matches {tournament.number_of_matches}</div>
        <button onClick={handleMatchesClick}>Matches</button>
      </div>
    : null }
      {modeMatches ? 
      <div>
        <h2>Round 1</h2>
        { [...Array(bracket.round1)].map((e,i) => {
          console.log([...Array(bracket)])
         return (
          <article>
           <CreateMatch key={i} tournament_id={id.tournament_id}/> 
          </article> 
         ) 
        })}
      </div>
    : null}
    </section>
  )
}