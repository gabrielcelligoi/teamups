import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import TeamItem from "./TeamItem";


export default function TeamsList(props) {
  const location = useLocation();

  const [state, setState] = useState({
    user: location.state[0],
    teams: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get(`/api/profiles/${state.user.id}/teams`)
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        teams: all[0].data
      }))
    })
  }, [])

  if (Array.isArray(state.teams)) {
    
    const allTeams = state.teams;

    const team = allTeams.map(singleTeam => (
      <TeamItem
          key={singleTeam.team_id}
          team_name={singleTeam.team_name}          
        />
    ))

    return (
      <div>
        <h1>Teams</h1>
        <div className="team-list">
          {team}
        </div>
      </div>
    )
  }
}