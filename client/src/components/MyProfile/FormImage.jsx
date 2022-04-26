import { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { useLocation } from "react-router-dom";
import useVisualMode from '../../hooks/useVisualMode'
import ShowImage from "./ShowImage";

export default function FormImage(props){
  const [img, setImg] = useState(props.image)
  const { editImage } = useApplicationData();
  const TEST = 'TEST'
  const { mode, transition, back } = useVisualMode();
  const reset = function() {
    setImg("");
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }
  const save = function(e) {
    e.preventDefault();
    editImage(props.id, img);
    setImg(img);
    props.onSave(transition(TEST));
  }

  // console.log(image)
return (
  <main>
    {mode !== TEST && (
  <section className='profile'>
    <h3>Add New Image Link:</h3>
    <div className='edit'>
    <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
      <input
        name="name"
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
    </form>
  <section>
    <section>
    <button onClick={save}>Save</button>
      <button onClick={cancel}>Cancel</button>
    </section>
    </section>
    </div>
  </section>
    )}
  {mode === TEST && (
    <ShowImage 
    key={props.id}
    id={props.id}
    image={img}
      onEdit={() => transition(!TEST)}
    />
  )}
</main>
)
}