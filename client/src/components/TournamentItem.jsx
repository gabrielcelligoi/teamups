import './TournamentItem.scss';
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


  // console.log("BRACKET", Object.keys(bracket).length)
  return (
    <section>
    {tournament ? 
      <div>
        <h2>Managing {tournament.name}</h2>
        <div>Number of Players: {tournament.number_of_players}</div>
        <button onClick={handleMatchesClick}>Set Up Matches</button>
      </div>
    : null }
      {modeMatches ? 
      <div>
        <h3>Round 1</h3>
        { [...Array(bracket.round1)].map((ele,i) => {
          console.log([...Array(bracket)])
          return (
           <CreateMatch key={i} tournament_id={id.tournament_id} tournament={true} sport={tournament.sport_id}/> 
         ) 
        })}
        <h3>Round 2</h3>
        { [...Array(bracket.round2)].map((e,i) => {
          return (
            <CreateMatch key={99 - i} tournament_id={id.tournament_id} tournament={true} sport={tournament.sport_id}/>
          )
        })}

        {bracket.round3 ?  <h3>Round 3</h3> : null}
        {bracket.round3 ?
          [...Array(bracket.round3)].map((e,i) => {
          return (
            <CreateMatch key={50 - i} tournament_id={id.tournament_id} tournament={true} sport={tournament.sport_id}/>
          )
        })
        : null}

        {bracket.round4 ?  <h3>Round 4</h3> : null}
        {bracket.round4 ?
          [...Array(bracket.round4)].map((e,i) => {
          return (
            <CreateMatch key={100 + i} tournament_id={id.tournament_id} tournament={true} sport={tournament.sport_id}/>
          )
        })
        : null}

        {bracket.round5 ?  <h3>Round 5</h3> : null}
        {bracket.round5 ?
          [...Array(bracket.round5)].map((e,i) => {
          return (
            <CreateMatch key={150 - i} tournament_id={id.tournament_id} />
          )
        })
        : null}

      </div>
    : null}
    </section>
  )
}