import "./CreateSport.css";
import useApplicationData from "../hooks/useApplicationData";
import { useState } from "react";


export default function CreateSport(props) {

  const { createSport, state }  = useApplicationData()
  const [sport, setSport] = useState("")
  const id = state.sports.length
  console.log(id)
  return (
    <form>
      <h1>Add a Sport</h1>
      <label htmlFor="sport-input">Name: </label>
      <input type="text" id="sport-input" name="sport-input" onChange={(e) => setSport(e.target.value)}/>
      <br /><button type="submit" onClick={(e) => {
        e.preventDefault() 
        createSport(id, sport)
        window.location.reload()
      }}>Submit</button>
    </form>

  )
}