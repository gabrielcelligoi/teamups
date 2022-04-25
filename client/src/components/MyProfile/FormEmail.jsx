import { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";

export default function FormEmail(props){
  const [email, setEmail] = useState(props.email);
  const { editEmail } = useApplicationData();
  const location = useLocation();
  const user = location.state.users
  const { token, setToken } = useToken()
  const userEmail = token
  

  const retrieveUser = function (email, userArray) {
    for (let user of userArray) {
      if(email === user.email) {
        return user
      }
    }
  }


let loggedIn = retrieveUser(userEmail, user)
  const reset = function() {
    setEmail("");
  }

  let id = loggedIn.id;

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function(e) {
    e.preventDefault();
    editEmail(id, email);
    setToken(email)
    window.location.reload();
    props.onSave();
  }

  return (
    <main>
      <section className='profile'>
        <h3>Email:</h3>
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
      </section>
    </main>
  );
}