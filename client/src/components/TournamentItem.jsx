import './TournamentItem.scss';
import { useState } from 'react';
export default function TournamentItem(props) {

return ( 
 <section className="tournament-container">
    <ul>

      <h3>{props.name}</h3> 
    </ul> 
  </section>
  
  )

}