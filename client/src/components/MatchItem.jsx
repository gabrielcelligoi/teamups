import './MatchItem.css';

export default function MatchItem(props) {

return ( 
  <section className="match-container">
    <ul>

      <h3>{props.date}</h3> 
      <h3>{props.sport}</h3> 
      <h3>{props.player1} vs {props.player2}</h3> 
      <h3>{props.location}</h3> 
      {props.addPlayer ? <button type="Submit">testbutton</button> : null}
    </ul> 
  </section>
)

}