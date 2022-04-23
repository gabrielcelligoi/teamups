// editpassword.jsx

import React from "react";

import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowEmail from "./ShowEmail";
import FormEmail from "./FormEmail";

export default function EditPassword(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const EDITEMAIL = "EDITEMAIL";
const location = useLocation();
// console.log(location.state.users)
const user = location.state.users[0]

const { mode, transition, back } = useVisualMode(
  user.password ? SHOW : EMPTY
);
return (
  <section> 
      {mode === SHOW && (
        <ShowEmail 
        email={user.email}
        onEdit={() => transition(EDITEMAIL)}/>
      )}
      {mode === EDITEMAIL && (
        <FormEmail 
        email={user.email}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
    </section>
)
}