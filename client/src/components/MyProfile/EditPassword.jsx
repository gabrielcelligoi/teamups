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
console.log(props.id)

const { mode, transition, back } = useVisualMode(SHOW);
return (
  <section> 
  {mode === SHOW && (
        <ShowPassword 
        key={props.id}
        id={props.id}
        password={props.password}
        onEdit={() => transition(EDITPASSWORD)}/>
      )}
            {mode === EDITPASSWORD && (
        <FormPassword
        key={props.id}
        id={props.id}
        password={props.password}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
    </section>
)
}