import MatchItem from "./MatchItem"

  const match = [
    {
      date: '2022-04-01T08:00:00.000Z',
      sport: 'Baseball',
      player1: 'Francis',
      player2: 'Keila',
      location: 'Toronto'
    },
    {
      date: '2022-05-01T08:00:00.000Z',
      sport: 'Soccer',
      player1: 'Gabriel',
      player2: 'Keila',
      location: 'Vancouver'
    }
  ]
export default function MatchItemList(props) {


  const mappedMatches = match.map(match => {

    console.log("match", match)
    
    return (
      

      <MatchItem 
      key={match.date}
      date={match.date}
      sport={match.sport}
      player1={match.player1}
      player2={match.player2}
      location={match.location}
      />
      )
    }) 
    
      

  return (
    <div>
      {mappedMatches}
    </div>
    
  )

}