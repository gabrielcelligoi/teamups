import MatchItem from "./MatchItem"
import { useLocation } from "react-router-dom"

// const match = [
//   {
//     date: '2022-04-01T08:00:00.000Z',
//     sport: 'Baseball',
//     player1: 'Francis',
//     player2: 'Keila',
//     location: 'Toronto'
//   },
//   {
//     date: '2022-05-01T08:00:00.000Z',
//     sport: 'Soccer',
//     player1: 'Gabriel',
//     player2: 'Keila',
//     location: 'Vancouver'
//   }
// ]

export default function MatchItemList(props) {
  
  let location = useLocation();

  console.log(location.state.state)
  const matches = location.state.matches

  const mappedMatches = matches.map(match => {

    return (
      

      <MatchItem 
      key={match.id}
      date={match.match_date}
      sport={match.sport_id}

      />
      )
    }) 
    
      

  return (
    <div>
      {mappedMatches}
    </div>
    
  )

}