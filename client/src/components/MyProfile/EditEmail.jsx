// editpassword.jsx

import React from "react";
import useToken from "../../hooks/useToken";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowEmail from "./ShowEmail";
import FormEmail from "./FormEmail";

export default function EditPassword(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const EDITEMAIL = "EDITEMAIL";
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
  loggedIn.password ? SHOW : EMPTY
);
return (
  <section> 
      {mode === SHOW && (
        <ShowEmail 
        key={loggedIn.id}
        email={loggedIn.email}
        onEdit={() => transition(EDITEMAIL)}/>
      )}
      {mode === EDITEMAIL && (
        <FormEmail 
        key={loggedIn.id}
        email={loggedIn.email}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
    </section>
)
}