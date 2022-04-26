import './styles.scss'
import { useState, useEffect } from "react";
import useApplicationData from '../../hooks/useApplicationData';
import useVisualMode from '../../hooks/useVisualMode'

export default function AddSports(props) {
  const [userSports, setUserSports] = useState(props.userSports);
  const [ sportObject, setSportObject ] = useState(props.sportsObject);
  const { addSport } = useApplicationData();
  const TEST = 'TEST'
  const { mode, transition, back } = useVisualMode();



  const reset = function() {
    setUserSports("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }

  const handleClick = function(user_id, sport_id) {
    addSport(user_id, sport_id);
    props.onSave(transition(TEST))
  }

  const mappedSports = sportObject.map(sport => {
    return     <img onClick={() => handleClick(props.id, sport.id)} key={sport.id} className='sports--img'
        src={sport.image}
        />
  })

  return (
    <main>
    {mode !== TEST && (
    <section className='profile'>
    
      <h3>Add Sports:</h3>
      <div className='edit'>
      <h2>{mappedSports}</h2>
      <button className='sports-button' onClick={cancel}>Cancel</button>
      </div> 
   
    </section> )}
    {mode === TEST && (
      <section className='profile'>
    
      <h3>Add Sports:</h3>
      <div className='edit'>
      <h2 className='display-text-box'>Added!</h2>
      </div> 
   
    </section>
    )}
    </main>
  )
}