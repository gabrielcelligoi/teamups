

export default function MatchItem(props) {

return ( 
  <section>
    <ul>

      <h3>{props.date}</h3> 

      <h3>{props.sport}</h3> 

      <h3>{props.player1} vs {props.player2}</h3> 

      <h3>{props.location}</h3> 
    </ul>
  </section>
)

}