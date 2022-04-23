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
  const mappedSports = props.sportsObject.map(sport => {

    return (
      <img
      className='sports--img'
      src={sport.image}
      />
    )
  })
  return (
    <section>
      <h1>Add Sports:</h1>
      <h2>{mappedSports}</h2>
      <button onClick={cancel}>Cancel</button>
    </section>
  )
}