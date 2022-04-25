//editname.jsx

import React from "react";
import ShowName from './ShowName'
import FormName from './FormName'
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";

export default function EditName(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const EDITEMAIL = "EDITEMAIL";
const EDITNAME = "EDITNAME";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";
const location = useLocation();
const user = location.state.users
const userToken = useToken();
const email = userToken.token
// console.log(user)
const retrieveUser = function (email, userArray) {
  for (let user of userArray) {
    if(email === user.email) {
      return user
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
        onSave={() => transition(SHOW)}
        />
      )}
    </section>
)
}