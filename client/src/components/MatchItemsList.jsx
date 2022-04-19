import MatchItem from "./MatchItem"
import { useLocation } from "react-router-dom"
import { getAllMatches } from "../helpers/selectors";

export default function MatchItemList(props) {
  
  let location = useLocation();


  const matches = getAllMatches(location.state.matches)
  const mappedMatches = matches.map(match => {
    return (
      
      <MatchItem 
      key={match.match_id}
      id={match.match_id}
      date={match.date}
      sport={match.sport}
      location={match.location}
      players={match.players}
      />
      )
    }) 
    
      

  return (
    <div>
      {mappedMatches}
    </div>
    
  )

}