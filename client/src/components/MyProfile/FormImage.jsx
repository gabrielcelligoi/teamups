import { useState, useEffect } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";

export default function FormImage(props){
  const [image, setImage] = useState(props.image)
  const { editImage } = useApplicationData();
  const location = useLocation();
  const user = location.state.users;
  const { token, setToken } = useToken();
  const userToken = token;

  const retrieveUser = function(email, userArray) {
    for (let user of userArray) {
      if(email === user.email) {
        return user;
      }
    }
  }

  let loggedIn = retrieveUser(userToken, user)

  const reset = function() {
    setImage("");
  }

  let id = loggedIn.id;

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function(e) {
    e.preventDefault();
    editImage(id, image);
    setImage(image);
    props.onSave();
  }
return (
  <main>
  <section className='profile'>
    <h3>Add New Image Link:</h3>
    <div className='edit'>
    <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
      <input
        name="name"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
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
)
}