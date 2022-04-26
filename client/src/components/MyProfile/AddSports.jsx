import './styles.scss'
import { useState, useEffect } from "react";
import useApplicationData from '../../hooks/useApplicationData';

export default function AddSports(props) {
  const [userSports, setUserSports] = useState(props.userSports);
  const [ sportObject, setSportObject ] = useState(props.sportsObject);
  const [error, setError] = useState("");
  const { addSport } = useApplicationData();



  const reset = function() {
    setUserSports("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }

  const mappedSports = sportObject.map(sport => {
    return     <img onClick={() => addSport(props.id, sport.id)} key={sport.id} className='sports--img'
        src={sport.image}
        />
  })

  return (
    <section className='profile'>
      <h3>Add Sports:</h3>
      <div className='edit'>
      <h2>{mappedSports}</h2>
      <button onClick={cancel}>Cancel</button>
      </div>
    </section>
  )
}