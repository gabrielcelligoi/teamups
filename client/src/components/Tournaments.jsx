import React, {useState, useEffect} from 'react';
import './Tournaments.css';

const tournaments = [
  {
    id: 1,
    name: 'Ultimate Championship',
    sport: 'Soccer'
  },
  {
    id: 2,
    name: 'Winner winner chicken dinner',
    sport: 'Baseball'
  },
  {
    id: 3,
    name: 'Ultimate Frisbee',
    sport: 'Hockey'
  },    
  {
    id: 4,
    name: 'Ultimate Sport!!!!!!!',
    sport: 'Basketball'
  },    
  {
    id: 5,
    name: 'Total Tournament',
    sport: 'Baseball'
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


export default function Tournaments(props) {

  const [filteredTournaments, setFilteredTournaments] = useState(null);
  useEffect(() => {
    setFilteredTournaments(tournaments);
  }, [])

  const filterTournament = function(sport) {
    let filteredTournament = tournaments.filter(tournament => tournament.sport === sport);
    return filteredTournament;
  }

  const handleTournament = function(event) {
    let tournament = event.target.value;
    if (tournament !== "") {
      setFilteredTournaments(filterTournament(tournament))
    }
    else {
      setFilteredTournaments(tournaments)
    }
  }

  return (
    <div>
      <h1>FILTER TOURNAMENTS BY SPORT</h1>
      <button value={""} onClick={handleTournament}>See All</button>
      {sports &&
      sports.map((sport) => (
        <button key={sport.id} value={sport.name} onClick={handleTournament}>
          {sport.name}
        </button>
      ))}
      <h1>TOURNAMENTS</h1>
      {filteredTournaments &&
      filteredTournaments.map(tournament => (
        <ul>
          <li>{tournament.name}</li>
        </ul>
      ))}
    </div>
  )

}