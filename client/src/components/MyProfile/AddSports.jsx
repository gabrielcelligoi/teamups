import './styles.scss'
import { useState, useEffect } from "react";

export default function AddSports(props) {
  const [sports, setSports] = useState(props.sports);
  const [error, setError] = useState("");

  const reset = function() {
    setSports("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }


  const showMySports = function(idArray, sportsObject) {
    let result = [];
    if (Array.isArray(idArray)) {
    for (let number of idArray) {
      for (let sport of sportsObject) {
        if (number === sport.id) {
          result.push(sport);
        }
      }
    }
  }
    return result;
  }

  const sport = function(userSports, sportsObject) {
    let result = {}
    if (Array.isArray(userSports)) {
    result = showMySports(userSports, sportsObject);
  } else {
    result = sportsObject;
  }
  return result
  }
  
const mySports = sport(props.userSports, props.sportsObject)
  const mappedSports = mySports.map(sport => {
    return     <img key={sport.id} className='sports--img'
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