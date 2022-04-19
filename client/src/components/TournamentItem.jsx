import './TournamentItem.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function TournamentItem(props) {

  const [tournament, setTournament] = useState()

  let location = useLocation()
  const id = location.state
  useEffect(() => {
    axios.get(`/api/tournaments/${id}`)
      .then((res) => {
        setTournament(res.data[0])
      })

  }, [])

  return (
    <div>
      <h2>Manage {tournament.name}</h2>
      <div>Number of Players {tournament.number_of_players}</div>
      <div>Number of Matches {tournament.number_of_matches}</div>
      <button>Add Match To Tournament</button>

    </div>
  )
}