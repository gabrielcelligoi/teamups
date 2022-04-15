import "./CreateSport.css";
import useApplicationData from "../hooks/useApplicationData";
import { useState } from "react";


export default function CreateSport(props) {

  const { createSport }  = useApplicationData()
  const [sport, setSport] = useState("")
  return (
    <form>
      <h1>Add a Sport</h1>
      <label htmlFor="sport-input">Name: </label>
      <input type="text" id="sport-input" name="sport-input" onChange={(e) => setSport(e.target.value)}/>
      <br /><button type="submit" onClick={(e) => {
        e.preventDefault() 
        console.log(e)
        createSport(sport)
      }}>Submit</button>
    </form>

  )
}