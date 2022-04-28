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
  let sports = location.state.sports

  const getSportImage = function(sportsList, sportsName){
    for (let sport of sportsList) {
      if (sport.name === sportsName) {
        return sport.image;
      }
    }
  }


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

  const getSportIcon = function(sportId) {
    for (let sport of sports) {
      if (sport.id === sportId) {
        return sport.image;
      }
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
              <div className='single-tournament-inner-container'>
                <img src={getSportIcon(tournament.sport_id)} className="tournament-icon"/>
                <div className='single-tournament-info-container'>
                  <p className='single-tournament-info'>{`Type: ${tournament.type}`}</p>
                  <p className='single-tournament-info'>{`${tournament.number_of_players} players`}</p>
                </div>
              </div>
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
          <div className='tournament-match-item' key={match.match_id}>
            <MatchItem 
              key={match.match_id}
              id={match.match_id}
              date={match.date}
              sport={match.sport}
              location={match.location}
              player1={match.players[0]}
              player2={match.players[1]}
              sport_image={getSportImage(sports, match.sport)}
              tournament={match.tournament_id}
            />
          </div>
        ))}
      </div>

    </div>
  );

}