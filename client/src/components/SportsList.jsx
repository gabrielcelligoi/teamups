import React, {useState, useEffect} from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useLocation } from 'react-router-dom';

// const tournaments = [
//   {
//     id: 1,
//     name: 'Ultimate Championship',
//     sport_id: 1
//   },
//   {
//     id: 2,
//     name: 'Winner winner chicken dinner',
//     sport_id: 2
//   },
//   {
//     id: 3,
//     name: 'Ultimate Frisbee',
//     sport_id: 1
//   },    
//   {
//     id: 4,
//     name: 'Ultimate Sport!!!!!!!',
//     sport_id: 3
//   },    
//   {
//     id: 5,
//     name: 'Total Tournament',
//     sport_id: 2
//   },
// ]

// const sports = [
//   {
//     id: 1,
//     name: 'Baseball',
//   },
//   {
//     id: 2,
//     name: 'Hockey',
//   },
//   {
//     id: 3,
//     name: 'Soccer',
//   }
// ]

// const matches = [
//   {
//     id: 1,
//     name: "matcheroo1",
//     tournament_id: 1,
//     sport_id: 1
//   },
//   {
//     id: 2,
//     name: "matcheroo2",
//     tournament_id: 1,
//     sport_id: 2
//   },
//   {
//     id: 3,
//     name: "matcheroo3",
//     tournament_id: 3,
//     sport_id: 2
//   },
//   {
//     id: 4,
//     name: "matcheroo4",
//     tournament_id: 3,
//     sport_id: 1
//   },
//   {
//     id: 5,
//     name: "matcheroo5",
//     tournament_id: 2,
//     sport_id: 2
//   },
//   {
//     id: 6,
//     name: "matcheroo6",
//     tournament_id: 2,
//     sport_id: 3
//   },
// ]

// const users = [
//   {
//     id: 1,
//     name: "Brenda",
//     email: "brenda@walsh.com",
//     password: "dylan",
//     wins: 0,
//     losses: 0,
//     sports: [1, 3]
//   },
//   {
//     id: 2,
//     name: "Brandon",
//     email: "brandon@walsh.com",
//     password: "dylan",
//     wins: 0,
//     losses: 0,
//     sports: [1, 2]
//   }
// ]


export default function SportsList(props) {
  const { state }  = useApplicationData()
  let location = useLocation();
  // console.log(location.state)
  const sports = location.state.sports;
  const matches = location.state.match;
  const tournaments = location.state.tournaments;

  const [filteredTournaments, setFilteredTournament] = useState(null);
  useEffect(() => {
    setFilteredTournament(tournaments)
  }, []);
  const [filteredMatches, setFilteredMatches] = useState(null);
  useEffect(() => {
    setFilteredMatches(matches)
  }, []);
// const [filteredUsers, setFilteredUsers] = useState(null);
// useEffect(() => {
//   setFilteredUsers(users)
// }, []);

  const filterTournament = function(sport_id) {
    let filteredTournament = tournaments.filter(tournament => Number(tournament.sport_id) === Number(sport_id));
    return filteredTournament;
  }

  const filterMatch = function(sport_id) {
    let filteredMatch = matches.filter(match => Number(match.sport_id) === Number(sport_id));
    return filteredMatch;
  }

// const filterUser = function(sport_id) {
//   let filteredUser = users.filter(user => {
//     let sports = user.sports
//     // console.log(sports)
//     for (let sport of sports) {
//       // console.log(sport)
//       // console.log(user)
//       if (Number(sport) === Number(sport_id)) {
//         return user;
//       }
//     }
//   });
//   return filteredUser
// };


  const handleTournaments = function(event) {
    let value = event.target.value;
    setFilteredTournament(filterTournament(value))
  }

  const handleMatches = function(event) {
    let value = event.target.value;
    setFilteredMatches(filterMatch(value))
  }

// const handleUsers = function(event) {
//   let value = event.target.value;
//   setFilteredUsers(filterUser(value))
// }

  const handleAllClicks = function(event) {
    handleTournaments(event);
    handleMatches(event);
  // handleUsers(event);
  }

  return (
    <div>
      <h1>Browse by Sports</h1>
      {sports &&
      sports.map(sport => (
        <button key={sport.id} value={sport.id} onClick={handleAllClicks}>{sport.name}</button>
      ))}
      <h4>Tournaments</h4>
      {filteredTournaments &&
      filteredTournaments.map(tournament => (
        <p key={tournament.id} value={tournament.id}>{tournament.name}</p>
      ))}
      <h4>Matches</h4>
      {filteredMatches &&
      filteredMatches.map(match => (
        <p key={match.id} value={match.id}>{match.id}</p>
      ))}
    {/* <h4>Users</h4>
    {filteredUsers &&
    filteredUsers.map(user => (
      <p key={user.id} value={user.id}>{user.name}</p>
    ))} */}
    </div>
  )
}; 