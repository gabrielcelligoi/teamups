import { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";

export default function FormName(props){
  const [name, setName] = useState(props.name);
  // const [edited, setEdited] = useState(false);
  const { editName } = useApplicationData();
  const location = useLocation();
const user = location.state.users
const { token, setToken } = useToken()
const userToken = token
// console.log(user)
const retrieveUser = function (email, userArray) {
  for (let user of userArray) {
    if(email === user.email) {
      return user
    }
  }
}


let loggedIn = retrieveUser(userToken, user)
  const reset = function() {
    setName("");
  }

  let id = loggedIn.id;

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function(e) {
    e.preventDefault();
    editName(id, name);
    setName(name)
    props.onSave();
  }

  return (
    <main>
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
    </main>
  );
}