// editpassword.jsx

import React from "react";
import useToken from "../../hooks/useToken";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import ShowEmail from "./ShowEmail";
import FormEmail from "./FormEmail";
import useApplicationData from "../../hooks/useApplicationData";



export default function EditEmail(props) {
const SHOW = "SHOW";
const EDITEMAIL = "EDITEMAIL";

const { mode, transition, back } = useVisualMode(SHOW);
return (
  <section> 
      {mode === SHOW && (
        <ShowEmail 
        key={props.id}
        id={props.id}
        email={props.email}
        onEdit={() => transition(EDITEMAIL)}/>
      )}
      {mode === EDITEMAIL && (
        <FormEmail 
        key={props.id}
        id={props.id}
        email={props.email}
        onCancel={back}
        onSave={props.onSave}
        />
      )}
    </section>
)
}