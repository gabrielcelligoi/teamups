import "./CreateMatch.css";
import useApplicationData from "../hooks/useApplicationData";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function CreateMatch(props) {
  let location = useLocation();
  console.log(location.state.sports)
  
  const [date, setDate] = useState("")
  const [matchLocation, setMatchLocation] = useState("")
  const [sport, setSport] = useState("Basketball")
  const sportsArr = location.state.sports.map(sport => {
    return sport = sport.name
  })

  console.log(sportsArr)
  return (
    <div>
      <form>
        <h1>Create New Match</h1>
        <label htmlFor="sports-list">Choose Sport: </label>
        <select id="sports-list" name="sports-list" onChange={(e) => setSport(e.target.value)}>
          {sportsArr.map(item => <option value={item}>{item}</option>)}
        </select>
        <label htmlFor="create-match-date">Match Date: </label>
        <input type="date" id="create-match-date" name="create-match-date" onChange={(e) => setDate(e.target.value)} />
        <label htmlFor="create-match-location">Location: </label>
        <input type="text" id="create-match-location" name="create-match-location" onChange={(e) => setMatchLocation(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}