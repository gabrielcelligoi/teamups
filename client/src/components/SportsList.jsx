import React, {useState, useEffect} from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useLocation } from 'react-router-dom';
import MatchItem from './MatchItem';
import { getAllMatches } from "../helpers/selectors";
import './SportsList.scss'



export default function SportsList(props) {
  const { state }  = useApplicationData()
  let location = useLocation();
  const sports = location.state.sports;
  const matches = getAllMatches(location.state.matches);
  const tournaments = location.state.tournaments;
  const users = location.state.users;


  const [filteredTournaments, setFilteredTournament] = useState(null);
  useEffect(() => {
    setFilteredTournament(tournaments)
  }, []);
  const [filteredMatches, setFilteredMatches] = useState(null);
  useEffect(() => {
    setFilteredMatches(matches)
  }, []);
  const [filteredUsers, setFilteredUsers] = useState(null);
  useEffect(() => {
    setFilteredUsers(users)
  }, []);

  const filterTournament = function(sport_id) {
    let filteredTournament = tournaments.filter(tournament => Number(tournament.sport_id) === Number(sport_id));
    return filteredTournament;
  }

  const filterMatch = function(sport_id) {
    let filteredMatch = matches.filter(match => Number(match.sport_id) === Number(sport_id));
    return filteredMatch;
  }

  const filterUser = function(sport_id) {
    let filteredUser = users.filter(user => {
      let sports = user.sports
      for (let sport of sports) {
        if (Number(sport) === Number(sport_id)) {
          return user;
        }
      }
    });
    return filteredUser
  };


  const handleTournaments = function(event) {
    let value = event.target.value;
    if (!value) {
      return null
    } else {
    setFilteredTournament(filterTournament(value))
  }
  }

  const handleMatches = function(event) {
    let value = event.target.value;
    setFilteredMatches(filterMatch(value))
  }

  const handleUsers = function(event) {
    let value = event.target.value;
    setFilteredUsers(filterUser(value))
  }

  const handleAllClicks = function(event) {
    handleTournaments(event);
    handleMatches(event);
    handleUsers(event);
  }

  return (
    <div className='sports-list-container'>
      <h1>Browse by Sports</h1>
      <div> {sports &&
      sports.map(sport => (
 <button className='sports-button' key={sport.id} value={sport.id} onClick={handleAllClicks}>{sport.name}</button>
      ))}</div>
      <h4 className='title'>Connect with Users</h4>
      <div className='single-container'>
      {filteredUsers &&
       filteredUsers.map(user => (
         
      <div className='user-connect'key={user.id} value={user.id}><div>{user.name}</div> <a href={`profiles/${user.id}`}>Check out Profile</a></div>
    ))}</div>
    <h4 className='title'>Tournaments</h4>
      
      {filteredTournaments &&
      filteredTournaments.map(tournament => (
<div className='single-container'>
              <p className='single-name'>{tournament.name}</p>
              <p className='single-info'>{`Type: ${tournament.type}`}</p>
              <p className='single-info'>{`${tournament.number_of_players} players`}</p>
              </div>
      ))}
      <h4>Matches</h4>
      {filteredMatches &&
      filteredMatches.map(match => (
        <h4 key={match.match_id}><MatchItem 
        id={match.match_id}
        key={match.match_id}
        date={match.date}
        sport={match.sport}
        location={match.location}
        player1={match.players[0]}
        player2={match.players[1]}
        /></h4>
      ))}
    </div>
  )
}; 