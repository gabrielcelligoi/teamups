//editname.jsx

import React from "react";
import ShowImage from "./ShowImage";
import useVisualMode from '../../hooks/useVisualMode'
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";
import AddImage from "./AddImage";

export default function EditImage(props) {
const EMPTY = "EMPTY";
const SHOW = "SHOW";
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
  loggedIn.image ? SHOW : EMPTY
);
return (
  <section> 
    {mode === SHOW && (
      <ShowImage 
      key={user.id}
        image={user.image}
      />
    )}
    {mode === EMPTY && (
      <AddImage />
    )}
  </section>
  )
}