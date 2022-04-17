import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import './Tournaments.css';
const tournaments = [
  {
    id: 1,
    name: 'Ultimate Championship',
    sport_id: 1
  },
  {
    id: 2,
    name: 'Winner winner chicken dinner',
    sport_id: 2
  },
  {
    id: 3,
    name: 'Ultimate Frisbee',
    sport_id: 1
  },    
  {
    id: 4,
    name: 'Ultimate Sport!!!!!!!',
    sport_id: 3
  },    
  {
    id: 5,
    name: 'Total Tournament',
    sport_id: 2
  },
]

const sports = [
  {
    id: 1,
    name: 'Baseball',
  },
  {
    id: 2,
    name: 'Hockey',
  },
  {
    id: 3,
    name: 'Soccer',
  }
]

const matches = [
  {
    id: 1,
    name: "matcheroo1",
    tournament_id: 1,
    sport_id: 2
  },
  {
    id: 2,
    name: "matcheroo2",
    tournament_id: 1,
    sport_id: 2
  },
  {
    id: 3,
    name: "matcheroo3",
    tournament_id: 3,
    sport_id: 2
  },
  {
    id: 4,
    name: "matcheroo4",
    tournament_id: 3,
    sport_id: 2
  },
  {
    id: 5,
    name: "matcheroo5",
    tournament_id: 2,
    sport_id: 2
  },
  {
    id: 6,
    name: "matcheroo6",
    tournament_id: 2,
    sport_id: 2
  },
]

export default function Tournaments(props) {
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
    event.preventDefault() 
    let value = event.target.value;
    if (value !== null) {
      setHidden(setFilteredMatch(filterMatch(value)))
    }
  }

  return (
    <div>
      <h1>Tournaments</h1>
        {Tournaments &&
        Tournaments.map(tournament => (
         <button key={tournament.id} value={tournament.id} onClick={handleMatches}> {tournament.name} </button>
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