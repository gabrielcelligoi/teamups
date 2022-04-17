import './MatchItem.css';
import AddPlayer from './AddPlayer';
import { useState } from 'react';
export default function MatchItem(props) {

const [add, setAdd] = useState()
const handleClick = () => {
  setAdd(true)
}


return ( 
  <section className="match-container">
    <ul>

      <h3>{props.date}</h3> 
      <h3>{props.sport}</h3> 
      <h3>{props.player1} vs {props.player2}</h3> 
      <h3>{props.location}</h3> 
      {props.addPlayer ? <button type="Submit" onClick={handleClick}>testbutton</button> : null}
    </ul> 
    {add ?
      <div>
        <AddPlayer 
        key={props.id}
        id={props.id}
        />
      </div>
      : null}
  </section>
)

}