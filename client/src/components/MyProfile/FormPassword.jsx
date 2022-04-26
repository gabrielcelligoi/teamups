import React, { useState } from 'react';
import useApplicationData from "../../hooks/useApplicationData";
import useVisualMode from '../../hooks/useVisualMode'

export default function FormPassword(props){
  const [password, setPassword] = useState(props.password);
const { editPassword } = useApplicationData();
const { mode, transition, back } = useVisualMode();
const TEST = 'TEST'

  const reset = function() {
    setPassword("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function(e) {
    e.preventDefault();
    editPassword(props.id, password);
    setPassword(password)
    props.onSave();
  }

  return (
    <main>
      <section className='profile'>
        <h3>New Password:</h3>
        <div className='edit'>
        <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
          <input
          className="text-box"
            name="name"
            type="text"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </form>
      <section>
        <section>
        <button className='sports-button' onClick={save}>Save</button>
          <button className='sports-button' onClick={cancel}>Cancel</button>
        </section>
        </section>
        </div>
      </section>
    </main>
  );
}