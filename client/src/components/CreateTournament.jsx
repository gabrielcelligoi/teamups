import './CreateTournament.css'

import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function CreateTournament(props) {
  let location = useLocation();

  const sportsArr = location.state.sports.map(sport => {
    return sport = sport.name
  })
  return (
    <div>
      <h1>Create A Tournament</h1>
      <form>
        <label htmlFor='create-tournament-name'>Tournament Name: </label> 
        <input type='text' id='create-tournament-name' name='create-tournament-name' />
        <label htmlFor='create-tournament-type'>Select Type: </label>
        <select id="create-tournament-type" name='create-tournament-type'>
          <option value="Single Elimination">Single Elimination</option>
        </select>
        <label htmlFor='create-tournament-players'>Number Of Players: </label>
        <input type="text" id='create-tournament-players' name='create-tournament-players' />
        <select id="create-tournament-sport" name='create-tournament-sport'>
          {sportsArr.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>

  )
}