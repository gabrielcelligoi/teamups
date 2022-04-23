import './MatchItem.scss';
import AddPlayer from './AddPlayer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllMatches } from '../helpers/selectors';
export default function MatchItem(props) {

const [add, setAdd] = useState()
const [update, setUpdate] = useState(false)
const [players, setPlayers] = useState()
useEffect(() => {
  axios.get(`/api/matches/${props.id}`)
    .then((data) => {
      const match = getAllMatches(data.data)
      setPlayers(match[0].players)
    })

}, [update])

const handleClick = (e) => {
  setAdd(true)
  e.target.style.display = "none"
}

const handlePlayerAdded = () => {
  setAdd(false)
}

const updateComponent = (e) => {
  setUpdate(value => !value)
}

const date = new Date(props.date).toLocaleDateString('en', {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
})

const time = new Date(props.date).toLocaleTimeString('en', {
  hour: 'numeric',
  minute: 'numeric'
})

return ( 
  <section className="match-item-container">
    <div className='upcoming-match-text'>

      <div className='upcoming-inline-info'>
      <i className="fa-solid fa-calendar" id='upcoming-inline-info-icon'></i>
        <h3 className='upcoming-inline-info-element'>{date}</h3>
      </div>

      <div className='upcoming-inline-info'>
        <i className="fa-solid fa-clock" id='upcoming-inline-info-icon'></i>
        <h4 className='upcoming-inline-info-element'>{time}</h4>
      </div>

      <div className='upcoming-inline-info'>            
        <i className="fa-solid fa-location-dot" id='upcoming-inline-info-icon'></i>          
        <h4 className='upcoming-inline-info-element'>{props.location}</h4>
      </div>

      <div className='upcoming-inline-info'>            
        <h4 className='upcoming-inline-info-element'>{props.sport}</h4>
      </div>

      
      {players ?
        <div className='upcoming-inline-info'>
          <h4 className='upcoming-inline-info-element'>{players[0]} vs {players[1]}</h4>
        </div>
        :
        <div className='upcoming-inline-info'>
          <h4 className='upcoming-inline-info-element'>{props.player1} vs {props.player2}</h4>
        </div>
      }
      
      
      {props.tournament ?
        <div className='upcoming-inline-info'>
          <h4 className='upcoming-inline-info-element'>Tournament Match</h4>
        </div>
        :
        <div className='upcoming-inline-info'>
          <h4 className='upcoming-inline-info-element'>Non Tournament Match</h4>
        </div>  
      }

      {props.addPlayer ?
        <button type="Submit" onClick={handleClick}>Add Player To Match</button>
        :
        null
      }
    
    </div>

    {add ?
      <div>
        <AddPlayer 
        key={props.id}
        id={props.id}
        onSubmit={handlePlayerAdded}
        update={updateComponent}
        />
      </div>
      : null}
  </section>
)

}