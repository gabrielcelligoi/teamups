import "./CreateSport.scss";
import useApplicationData from "../hooks/useApplicationData";
import { useState } from "react";


export default function CreateSport(props) {

  const { createSport, state }  = useApplicationData()
  const [sport, setSport] = useState("")
  const [image, setImage] = useState("")
  
  const id = state.sports.length
  console.log(id)
  return (
    <div className="create-match-container">
        <h1 className="create-match-title">Add a Sport</h1>

      <form className="row g-3">

        <label className="form-label" htmlFor="sport-input">Name: </label>
        <input className="form-control" type="text" id="sport-input" name="sport-input" value={sport} onChange={(e) => setSport(e.target.value)}/>
        
        <label className="form-label" htmlFor="sport-img">Image: </label>
        <input className="form-control" type="text" id="sport-img" name="sport-img" value={image} onChange={(e) => setImage(e.target.value)} /> 
        
        <br />
        
        <button
          className='create-match-button'
          type="submit"
          onClick={(e) => {
            e.preventDefault() 
            createSport(id, sport, image)
            window.location.reload()
          }}>
          Submit
        </button>

      </form>
    </div>

  )
}