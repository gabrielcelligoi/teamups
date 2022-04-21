import './TournamentItem.scss';
import { useDebugValue, useEffect, useState } from "react"
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


  // console.log("BRACKET", Object.keys(bracket).length)
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
        { [...Array(bracket.round1)].map((ele,i) => {
          console.log([...Array(bracket)])
          return (
           <CreateMatch key={i} tournament_id={id.tournament_id} tournament={true}/> 
         ) 
        })}
        <h2>Round 2</h2>
        { [...Array(bracket.round2)].map((e,i) => {
          return (
            <CreateMatch key={i} tournament_id={id.tournament_id} tournament={true}/>
          )
        })}

        {bracket.round3 ?  <h2>Round 3</h2> : null}
        {bracket.round3 ?
          [...Array(bracket.round3)].map((e,i) => {
          return (
            <CreateMatch key={i} tournament_id={id.tournament_id} tournament={true}/>
          )
        })
        : null}

        {bracket.round4 ?  <h2>Round 4</h2> : null}
        {bracket.round4 ?
          [...Array(bracket.round4)].map((e,i) => {
          return (
            <CreateMatch key={i} tournament_id={id.tournament_id} tournament={true}/>
          )
        })
        : null}

        {bracket.round5 ?  <h2>Round 5</h2> : null}
        {bracket.round5 ?
          [...Array(bracket.round5)].map((e,i) => {
          return (
            <CreateMatch key={i} tournament_id={id.tournament_id} />
          )
        })
        : null}

      </div>
    : null}
    </section>
  )
}