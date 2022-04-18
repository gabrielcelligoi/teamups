import React, {useState, useEffect} from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useLocation } from 'react-router-dom';

import './Tournaments.css';


export default function Tournaments(props) {
  const { state }  = useApplicationData()
  let location = useLocation();
  // console.log(location.state)
  let matches = location.state.match
  let tournaments = location.state.tournaments
  const [hidden, setHidden] = useState(true);
  const [Tournaments, setTournaments] = useState(null);
  useEffect(() => {
  setTournaments(tournaments)
  }, []);
  const [filteredMatch, setFilteredMatch] = useState(null);
  useEffect(() => {
  setFilteredMatch(matches)
  }, []);

    const filterMatch = function(tournament_id) {
    let filteredMatch = matches.filter(match => Number(match.tournament_id) === Number(tournament_id))
    console.log(filteredMatch)
    return filteredMatch;
  }

    const handleMatches = function(event) {
    event.preventDefault();
    let value = event.target.value;
    if (value !== null) {
      setHidden(setFilteredMatch(filterMatch(value)))
    } else {
      setHidden(matches)
    }
  }

  return (
    <div>
      <h1>Tournaments</h1>
        {Tournaments &&
        Tournaments.map(tournament => (
         <button key={tournament.id} value={tournament.id} onClick={(e) => {
          e.preventDefault()
          handleMatches(e)}}> {tournament.name} </button>
         ))}
      <div hidden={hidden}>
        <h1>Matches in Tournament:</h1>
        {filteredMatch && 
        filteredMatch.map(match => (
        <h4><a key={match.id} href={`/matches/${match.id}`}>{match.id}</a></h4>
        ))}</div>
    </div>
  );

}