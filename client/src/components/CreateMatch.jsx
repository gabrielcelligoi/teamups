import "./CreateMatch.scss";
import useApplicationData from "../hooks/useApplicationData";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSportId } from "../helpers/selectors";
import MatchItem from "./MatchItem";
import axios from "axios";
import './CreateMatch.scss'

export default function CreateMatch(props) {
  let location = useLocation();
  const { createMatch, getNewMatch, createTournamentMatch } = useApplicationData()
  
  const [date, setDate] = useState("")
  const [matchLocation, setMatchLocation] = useState("")
  const [sport, setSport] = useState("Basketball")
  const [showNew, setShowNew] = useState(false)
  const [newMatch, setNewMatch] = useState()
  const [sportsList, setSportsList] = useState()

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
    createMatch(sportId, date, matchLocation)
      .then(res => {
          getNewMatch()
          .then((data) => {
            setNewMatch(data.data[0])
            setShowNew(true)
          })
      })
  }

  const handleTournamentClick = (e) => {
    e.preventDefault()
    const sportId = getSportId(sport, sportsList)
    createTournamentMatch(sportId, date, matchLocation, props.tournament_id)
    .then(res => {
      getNewMatch()
      .then((data) => {
        setNewMatch(data.data[0])
        setShowNew(true)
      })
    })
  }

  return (
    <div className="create-match-container">
        <h1 className="create-match-title">Create New Match</h1>

      <form className="row g-3">

        <label htmlFor="sports-list" className="form-label">Choose Sport: </label>
        <select id="sports-list" name="sports-list" className="form-select" onChange={(e) => setSport(e.target.value)}>
          {sportsList ? sportsList.map(item => <option value={item.name}>{item.name}</option>) : null }
        </select>

        <label htmlFor="create-match-date" className="form-label">Match Date: </label>
        <input type="date" class="form-control" id="create-match-date" name="create-match-date" onChange={(e) => setDate(e.target.value)} />
        
        <label htmlFor="create-match-location" className="form-label">Location: </label>
        <input type="text" class="form-control" id="create-match-location" name="create-match-location" onChange={(e) => setMatchLocation(e.target.value)} />
        
        <button className='create-match-button' type="submit" onClick={props.tournament_id ? handleTournamentClick : handleClick}>Submit</button>
      </form>

    <div>
      {showNew ?
      <MatchItem
      key={newMatch.id}
      id ={newMatch.id}
      date={newMatch.match_date}
      sport={sport}
      location={newMatch.match_location}
      addPlayer={true}
      tournament={props.tournament_id ? true : false}
      /> 
      : null}
      </div>
    </div>

  )
}