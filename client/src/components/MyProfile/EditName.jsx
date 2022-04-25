//editname.jsx

import React from "react";
import ShowName from './ShowName'
import FormName from './FormName'
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";
import useApplicationData from "../../hooks/useApplicationData";
import EditedName from "./EditedName";

export default function EditName(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const EDITED = "EDITED";
const EDITNAME = "EDITNAME";
const location = useLocation();
const user = location.state.users
const { token, setToken } = useToken()
const email = token

const retrieveUser = function (email, userArray) {
  if(Array.isArray(userArray)) {
  for (let user of userArray) {
    if(email === user.email) {
      return user
    }
  }
  }
}


let loggedIn = retrieveUser(email, user)




const { mode, transition, back } = useVisualMode(
  loggedIn.name ? SHOW : EMPTY
);
return (
  <section> 
      {mode === SHOW && (
        <ShowName
        key={loggedIn.id}
        name={loggedIn.name}
        onEdit={() => transition(EDITNAME)}
        />
      )}
      {mode === EDITNAME && (
        <FormName 
        key={loggedIn.id}
        name={loggedIn.name}
        onCancel={back}
        onSave={() => transition(EDITED)}
        />
      )}
            {mode === EDITED && (
        <EditedName
        key={loggedIn.id}
        />
      )}
    </section>
)
}