import "./CreateSport.css";
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
    createTeam(name, sportId, image)

  } 
  return (
    <div>
      <form>
        <h1>Create a Team</h1>
        <label htmlFor="team-input">Name: </label>
        <input type="text" id="team-input" name="team-input" value={name} onChange={(e) => setName(e.target.value)}/>
        <select id="sports-list" name="sports-list" onChange={(e) => setSport(e.target.value)}>
          {sportsList ? sportsList.map(item => <option value={item.name}>{item.name}</option>) : null }
        </select>
        <label htmlFor="team-img">Image: </label>
        <input type="text" id="team-img" name="team-img" value={image} onChange={(e) => setImage(e.target.value)} /> 
        <br /><button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>

  )
}