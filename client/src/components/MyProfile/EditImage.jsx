//editname.jsx

import React from "react";
import ShowImage from "./ShowImage";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";

export default function EditImage(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const location = useLocation();
const user = location.state.users[0]

const { mode, transition, back } = useVisualMode(
  user.name ? SHOW : EMPTY
);
return (
  <section> 
    {mode === SHOW && (
      <ShowImage 
      key={user.id}
        image={user.image}
      />
    )}
  </section>
  )
}