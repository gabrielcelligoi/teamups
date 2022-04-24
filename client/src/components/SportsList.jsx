import React, {useState, useEffect} from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useLocation } from 'react-router-dom';
import MatchItem from './MatchItem';
import { getAllMatches } from "../helpers/selectors";
import './SportsList.scss'
import SportsListProfileItem from './SportsListProfileItem';



export default function SportsList(props) {
  const { state }  = useApplicationData()
  let location = useLocation();
  const sports = location.state.sports;
  const matches = getAllMatches(location.state.matches);
  const tournaments = location.state.tournaments;
  const users = location.state.users;

  const [hidden, setHidden] = useState(true);
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
      if (sports !== null) {
        for (let sport of sports) {
          if (Number(sport) === Number(sport_id)) {
            return user;
          }
        }
       }
    });
    return filteredUser
  };

  const handleTournaments = function(event) {
    let value = event.target.value;
    if (value !== null) {
      setHidden(setFilteredTournament(filterTournament(value)))
    } else {
    setHidden(tournaments)
  }
  }

  const handleMatches = function(event) {
    event.preventDefault()
    let value = event.target.value;
    if (value !== null) {
      setHidden(setFilteredMatches(filterMatch(value)))
    } else {
      setHidden(matches)
  }
  }

  const handleUsers = function(event) {
    let value = event.target.value;
    if (value !== null) {
      setHidden(setFilteredUsers(filterUser(value))) 
    } else {
      setHidden(users)
  }
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
        <button className='sports-button' key={sport.id} value={sport.id} onClick={(e) => {
          e.preventDefault()
          handleAllClicks(e)
        }}>{sport.name}</button>
             ))}</div>
             <div hidden={hidden}>
             <h4 className='title'>Connect with Users</h4>
             <div className='single-container'>
             {filteredUsers &&
              filteredUsers.map(user => (
                <SportsListProfileItem
                key={user.id}
                id={user.id}
                avatar={user.image}
                name={user.name}
                wins={user.wins}
                losses={user.losses}/>
            ))}</div></div>
            <div hidden={hidden}>
            <h4 className='title'>Tournaments</h4>
            <div className='single-container'>
      {filteredTournaments &&
      filteredTournaments.map(tournament => (
        <div className='single-item'>
        <p>{tournament.name}</p>
        <p>{`Type: ${tournament.type}`}</p>
        <p>{`${tournament.number_of_players} players`}</p>
        </div>

      ))}</div></div>
      <div hidden={hidden}>
      <h4 className='title'>Matches</h4>
      <div className='single-container'>
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
        ))}</div>
        </div>
        </div>
      )
    };