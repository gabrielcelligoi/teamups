import React, {useState, useEffect} from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useLocation } from 'react-router-dom';
import MatchItem from './MatchItem';
import { getAllMatches } from "../helpers/selectors";

import './Tournaments.scss';


export default function Tournaments(props) {
  const { state }  = useApplicationData()
  let location = useLocation();
  let matches = getAllMatches(location.state.matches)
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
            <div className='tournament-container'>
              <h2>{tournament.name}</h2>
              <h4>{`Type: ${tournament.type}`}</h4>
              <h4>{`${tournament.number_of_players} players`}</h4>
              <button
                key={tournament.id}
                value={tournament.id}
                onClick={(e) => {
                  e.preventDefault()
                  handleMatches(e)}}> {tournament.name} </button>
            </div>
        ))}

      <div hidden={hidden}>
        <h1>Matches in Tournament:</h1>
        {filteredMatch && 
        filteredMatch.map(match => (
        <h4 key={match.match_id}><MatchItem 
          key={match.match_id}
          id={match.match_id}
          date={match.date}
          sport={match.sport}
          location={match.location}
          player1={match.players[0]}
          player2={match.players[1]}
        /></h4>
        ))}</div>
    </div>
  );

}