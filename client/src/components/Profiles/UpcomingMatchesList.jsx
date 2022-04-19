import UpcomingMatchItem from "./UpcomingMatchItem";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import './UpcomingMatchesList.css'

export default function UpcomingMacthesList(props) {
  const location = useLocation();

  const [state, setState] = useState({
    user: location.state[0],
    matches: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/${state.user.id}/matches`)
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        matches: all[0].data
      }))
    })
  }, [])

  if (Array.isArray(state.matches)) {
    
    const allMatches = state.matches;

    const match = allMatches.map(singleMatch => (
      <UpcomingMatchItem
          key={singleMatch.key}
          id={singleMatch.match_id}
          players={singleMatch.players}
          sport={singleMatch.sport}
          date={singleMatch.date}
          location={singleMatch.location}
        />
    ))

    return (
      <div>
        <h1>Upcoming Matches</h1>
        <div className="matches-list">
          {match}
        </div>
      </div>
    )
  }


}


// {tournament ? 
//   <div>
//     <h2>Manage {tournament.name}</h2>
//     <div>Number of Players {tournament.number_of_players}</div>
//     <div>Number of Matches {tournament.number_of_matches}</div>
//     <button>Add Match To Tournament</button>
//   </div>
// : null }

