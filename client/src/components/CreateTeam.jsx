import "./CreateTeam.scss";
import useApplicationData from "../hooks/useApplicationData";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSportId } from "../helpers/selectors";
export default function CreateTeam(props) {

  const { createTeam, state }  = useApplicationData()
  const [image, setImage] = useState("")
  const [sport, setSport] = useState("Basketball")
  const [sportsList, setSportsList] = useState()
  const [name, setName] = useState("")
  const [add, setAdd] = useState(false)

  useEffect(() => {
    axios.get(`/api/sports/`)
      .then((res) => {
        setSportsList(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  const handleClick = (e) => {
    e.preventDefault()
    const sportId = getSportId(sport, sportsList)
    createTeam(name, sportId, image).then(setAdd(true))

  } 

  return (
    <div className='create-team-container'>
      {!add ? 
      <form>
        <h1 className='create-team-title'>Create a Team</h1>
        <label className='form-label' htmlFor="team-input">Name: </label>
        <input className='form-control' type="text" id="team-input" name="team-input" value={name} onChange={(e) => setName(e.target.value)}/>
        <label className='form-label' htmlFor="team-input">Select Sport Type: </label>
        <select className='form-control' id="sports-list" name="sports-list" onChange={(e) => setSport(e.target.value)}>
          {sportsList ? sportsList.map(item => <option value={item.name}>{item.name}</option>) : null }
        </select>
        <label className='form-label' htmlFor="team-img">Image: </label>
        <input className='form-control' type="text" id="team-img" name="team-img" value={image} onChange={(e) => setImage(e.target.value)} /> 
        <br /><button className='create-team-button' type="submit" onClick={handleClick}>Submit</button>
      </form>
        :<form>
        <h1>Team Created!</h1>
        <button className='create-team-button' type="submit" onClick={(e) => setAdd(true)}>Create Another Team</button>
        </form>} 
        
    </div>

  )
}