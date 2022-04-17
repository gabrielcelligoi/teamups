import React, {useState, useEffect} from 'react';
import './Tournaments.css';
import { useLocation } from "react-router-dom"


export default function Tournaments(props) {
  let location = useLocation();

  const sports = location.state.state.sports
  const tournaments = location.state.state.tournaments
  const matches = location.state.state.matches
  // console.log(tournaments)
  // console.log(matches[0].tournament_id.toString())

  const [filteredTournaments, setFilteredTournaments] = useState(null);
  useEffect(() => {
    setFilteredTournaments(tournaments)
  }, []);


  const [filteredMatch, setFilteredMatch] = useState(null);
  useEffect(() => {
    setFilteredMatch(matches)
  }, []);

  const filterTournament = function(sport_id) {
    let filteredTournament = tournaments.filter(tournament => Number(tournament.sport_id) === Number(sport_id))
    // console.log(filteredTournament)
    return filteredTournament;
  }

  const filterMatch = function(tournament_id) {
    let filteredMatch = matches.filter(match => Number(match.tournament_id) === Number(tournament_id))
    console.log(filteredMatch)
    return filteredMatch;
  }

// console.log(filterMatch(matches[0].tournament_id))
  const handleTournament = function(event) {
    let value = event.target.value;
    if (value !== "") {
      setFilteredTournaments(filterTournament(value))
    } else {
      setFilteredTournaments(tournaments)
    }
  }

  const handleMatches = function(event) {
    let value = event.target.value;
    // console.log(value)
    if (value !== null) {
      setFilteredMatch(filterMatch(value))
    } else {
      setFilteredMatch(matches)
    }

  }

  return (
    <div>
      <h1>FILTER TOURNAMENTS BY SPORT</h1>
      <button value={""} onClick={handleTournament}>See All</button>
      {sports &&
      sports.map((sport) => (
        <button key={sport.id} value={sport.id.toString()} onClick={handleTournament}>{sport.name}</button>
      ))}
      <h1>TOURNAMENTS</h1>
      {filteredTournaments &&
      filteredTournaments.map(tournament => (
         <button key={tournament.id} value={tournament.id} onClick={handleMatches}> {tournament.name} </button>
         ))}
{filteredMatch &&
filteredMatch.map(match => (
<h4><a key={match.id} href={`/matches/${match.id}`}>{match.id}</a></h4>
))}
    </div>
  )
}