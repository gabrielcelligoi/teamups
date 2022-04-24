// editpassword.jsx

import React from "react";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowPassword from "./ShowPassword";
import FormPassword from "./FormPassword";

export default function EditPassword(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const EDITPASSWORD = 'EDITPASSWORD'
const location = useLocation();
// console.log(location.state.users)
const user = location.state.users[0]

const { mode, transition, back } = useVisualMode(
  user.password ? SHOW : EMPTY
);
return (
  <section> 
  {mode === SHOW && (
        <ShowPassword 
        password={user.password}
        onEdit={() => transition(EDITPASSWORD)}/>
      )}
            {mode === EDITPASSWORD && (
        <FormPassword
        password={user.password}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
    </section>
)
}