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
    <div className='tournaments-container'>
      <h1 className='tournaments-title'>Tournaments</h1>

      <div className='tournaments-list-container'>
        {Tournaments &&
          Tournaments.map(tournament => (
            <div className='single-tournament-container'>
              <p className='single-tournament-name'>{tournament.name}</p>
              <p className='single-tournament-info'>{`Type: ${tournament.type}`}</p>
              <p className='single-tournament-info'>{`${tournament.number_of_players} players`}</p>
              <button
                className='select-tournament-button'
                key={tournament.id}
                value={tournament.id}
                onClick={(e) => {
                  e.preventDefault()
                  handleMatches(e)}}> Check it out! </button>
            </div>
        ))}
      </div>

      <div hidden={hidden} className='tournaments-container'>
        <h1 className='tournaments-title'>Matches in Tournament</h1>

        {filteredMatch && 
          filteredMatch.map(match => (
          <h4 key={match.match_id}>
            <MatchItem 
              key={match.match_id}
              id={match.match_id}
              date={match.date}
              sport={match.sport}
              location={match.location}
              player1={match.players[0]}
              player2={match.players[1]}
            />
          </h4>
        ))}
      </div>

    </div>
  );

}