import { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import useVisualMode from '../../hooks/useVisualMode'
import ShowImage from "./ShowImage";
import ShowEmail from "./ShowEmail";
import useToken from "../../hooks/useToken";

export default function FormName(props){
  const [email, setEmail] = useState(props.email);
  const { token, setToken } = useToken()
  const { editEmail } = useApplicationData();
  const { mode, transition, back } = useVisualMode();
  const TEST = 'TEST'

  const reset = function() {
    setEmail("");
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function(e) {
    e.preventDefault();
   
    editEmail(props.id, email);
    setEmail(email)
    setToken(email)
    
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
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </form>
      <section>
        <section>
        <button onClick={save}>Save</button>
          <button onClick={cancel}>Cancel</button>
        </section>
        </section>
        </div>
      </section>  )}
      {mode === TEST && (
      <ShowEmail 
    key={props.id}
    id={props.id}
    email={email}
    message='Email changed pending confirmation'
      onEdit={() => transition(!TEST)}
    />
    )}
    </main>
  );
}