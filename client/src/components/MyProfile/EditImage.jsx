import React from "react";
import ShowImage from "./ShowImage";
import useVisualMode from '../../hooks/useVisualMode'
import AddImage from "./AddImage";
import FormImage from "./FormImage";


export default function EditImage(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const ADD = "ADD"

const { mode, transition, back } = useVisualMode(
  props.image ? SHOW : EMPTY
);
return (
  <section> 
    {mode === SHOW && (
      <ShowImage 
      key={props.id}
      id={props.id}
      image={props.image}
        onEdit={() => transition(ADD)}
      />
    )}
    {mode === EMPTY && (
      <AddImage
      key={props.id}
      id={props.id}
      image={props.image}
      onEdit={() => transition(ADD)}
     />
    )}
    {mode === ADD && (
      <FormImage
      key={props.id}
      id={props.id}
      onCancel={back}
      onSave={props.onSave}
      />
    )}
  </section>
  )
}