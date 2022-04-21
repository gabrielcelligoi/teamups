import './SingleTeamItem.jsx'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import AddTeamMember from './AddTeamMember';

export default function SingleTeamItem(props) {

  const [state, setState] = useState()
  const id = useParams()
  console.log("team", state)

  useEffect(() => {
    Promise.all([
      axios.get(`/api/teams/${id.teamid}`),
      axios.get('/api/sports')
    ])
      .then((all) => {
        console.log("all", all)
        setState({
          team: all[0].data,
          sports: all[1].data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  console.log(props)
  return (
    <section>
      <h1>Team Details</h1>
      {state ? <article>
        <h2>{state.team[0].name}</h2>
        <h2>{state.sports[state.team[0].sport_id - 1].name}</h2>
        <AddTeamMember teamId={state.team[0].id}/>
      </article>

      : null}
    </section>
  )
} 