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

  let id = function(sportsObject) {
    let result = [];
    for(let sport of sportsObject) {
      result.push(sport.id)
    }
    return result;
  }

 const sportsId = id(props.sportsObject)
  const userSports = props.userSports;

  let filtered = sportsId.filter(item => !userSports.includes(item));

  console.log(filtered)

  const showMySports = function(idArray, sportsObject) {
    let result = [];
    for (let number of idArray) {
      for (let sport of sportsObject) {
        if (number === sport.id) {
          result.push(sport);
        }
      }
    }
    return result;
  }

  const sportsResult = showMySports(filtered, props.sportsObject)

  const mappedSports = sportsResult.map(sport => {
    return <img className='sports--img'
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