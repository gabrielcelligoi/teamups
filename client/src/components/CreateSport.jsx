import "./CreateSport.css";
import useApplicationData from "../hooks/useApplicationData";
import { useState } from "react";


export default function CreateSport(props) {

  const { createSport, state }  = useApplicationData()
  const [sport, setSport] = useState("")
  const [image, setImage] = useState("")
  
  const id = state.sports.length
  console.log(id)
  return (
    <div>
      <form>
        <h1>Add a Sport</h1>
        <label htmlFor="sport-input">Name: </label>
        <input type="text" id="sport-input" name="sport-input" value={sport} onChange={(e) => setSport(e.target.value)}/>
        <label htmlFor="sport-img">Image: </label>
        <input type="text" id="sport-img" name="sport-img" value={image} onChange={(e) => setImage(e.target.value)} /> 
        <br /><button type="submit" onClick={(e) => {
          e.preventDefault() 
          createSport(id, sport, image)
          window.location.reload()
        }}>Submit</button>
      </form>
    </div>

  )
}