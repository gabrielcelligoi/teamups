//editname.jsx

import React from "react";
import ShowName from './ShowName'
import FormName from './FormName'
import useVisualMode from '../../hooks/useVisualMode'

export default function EditName(props) {
const SHOW = "SHOW";
const EDITNAME = "EDITNAME";

const { mode, transition, back } = useVisualMode(SHOW);
return (
  <section> 
      {mode === SHOW && (
        <ShowName
        key={props.id}
        id={props.id}
        name={props.name}
        onEdit={() => transition(EDITNAME)}
        />
      )}
      {mode === EDITNAME && (
        <FormName 
        key={props.id}
        id={props.id}
        name={props.name}
        onCancel={back}
        onSave={props.onSave}
        />
      )}
    </section>
)
}