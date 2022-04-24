// editpassword.jsx

import React from "react";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowPassword from "./ShowPassword";
import FormPassword from "./FormPassword";
import useToken from "../../hooks/useToken";

export default function EditPassword(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const EDITPASSWORD = 'EDITPASSWORD'
const location = useLocation();
const user = location.state.users
const userToken = useToken();
const email = userToken.token
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
        <ShowPassword 
        key={loggedIn.id}
        password={'******'}
        onEdit={() => transition(EDITPASSWORD)}/>
      )}
            {mode === EDITPASSWORD && (
        <FormPassword
        key={loggedIn.id}
        password={loggedIn.password}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
    </section>
)
}