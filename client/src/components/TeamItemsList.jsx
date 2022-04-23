import './TeamItemsList.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import TeamItem from './Profiles/TeamItem'
export default function TeamItemsList(props) {


  let location = useLocation();
  const teams = location.state.teams
  
  const mappedTeams = teams.map(team => {
   
   return(
     <TeamItem 
      key={team.id}
      team_id={team.id}
      team_name={team.name}
      sport={team.sport_id}
      image={team.image_url}
      />

   ) 
  })
  return (
    <section>
      <h1>Teams List</h1>
      {mappedTeams}
    </section>
  )
}