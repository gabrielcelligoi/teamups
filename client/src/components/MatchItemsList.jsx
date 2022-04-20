import MatchItem from "./MatchItem"
import { useLocation } from "react-router-dom"
import { getAllMatches } from "../helpers/selectors";

export default function MatchItemList(props) {
  
  let location = useLocation();


  const matches = getAllMatches(location.state.matches)

  console.log(matches)
  
  const mappedMatches = matches.map(match => {
    console.log(match)
    return (
      
      <MatchItem 
      key={match.match_id}
      date={match.date}
      sport={match.sport}
      location={match.location}
      player1={match.players[0]}
      player2={match.players[1]}
      tournament={match.tournament_id ? true : false}
      />
      )
    }) 
    
      

  return (
    <div>
      {mappedMatches}
    </div>
    
  )

}