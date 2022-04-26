import { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import useVisualMode from '../../hooks/useVisualMode'
import ShowImage from "./ShowImage";
import ShowName from "./ShowName";

export default function FormName(props){
  const [name, setName] = useState(props.name);
  const { editName } = useApplicationData();
  const { mode, transition, back } = useVisualMode();
  const TEST = 'TEST'

  const reset = function() {
    setName("");
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function(e) {
    e.preventDefault();
    editName(props.id, name);
    setName(name);
    props.onSave(transition(TEST));
  }

  return (
    <main>
      {mode !== TEST && (
      <section className='profile'>
        <h3>Name:</h3>
        <div className='edit'>
        <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
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
    <ShowName 
    key={props.id}
    id={props.id}
    name={name}
      onEdit={() => transition(!TEST)}
    />
  )}
    </main>
  );
}