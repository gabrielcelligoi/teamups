//editname.jsx

import React from "react";
import ShowName from './ShowName'
import FormName from './FormName'
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";

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
// console.log(location.state.users)
const user = location.state.users[0]

const { mode, transition, back } = useVisualMode(
  user.name ? SHOW : EMPTY
);
return (
  <section> 
      {mode === SHOW && (
        <ShowName
        name={user.name}
        onEdit={() => transition(EDITNAME)}
        />
      )}
      {mode === EDITNAME && (
        <FormName 
        name={user.name}
        onCancel={back}
        onSave={() => transition(SHOW)}
        />
      )}
    </section>
)
}